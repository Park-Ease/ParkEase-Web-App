import { S3Client, ListObjectsV2Command, PutObjectCommand } from "@aws-sdk/client-s3";
import { currentUser } from "@clerk/nextjs/server";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const getVideosFromS3 = async (req) => {
  try {
    const user = await currentUser();
    const clerkId = user.id;

    if (!clerkId) {
      return {
        status: 400,
        data: null,
        message: "User not found!",
      };
    }

    const bucketName = process.env.AWS_S3_BUCKET_NAME;
    const folderPrefix = `videos/${clerkId}`; 

    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: folderPrefix,
    });

    const response = await s3.send(command);

    if (!response.Contents || response.Contents.length === 0) {
      const createFolderCommand = new PutObjectCommand({
        Bucket: bucketName,
        Key: `${folderPrefix}/placeholder.txt`,
        Body: "This is a placeholder file to create the folder.",
      });

      await s3.send(createFolderCommand);
      console.log(`Folder ${folderPrefix} created`);
    }

    const response1 = await s3.send(command);

    const videos =
      response1.Contents?.map((item) => ({
        key: item.Key,
        url: `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${item.Key}`,
        title: item.Key.split("/")[2],
        lastModified: item.LastModified,
        size: item.Size,
      })) || [];
      
    const filteredVideos = videos.filter(video => video.title !== 'placeholder.txt');

    console.log("Filtered Video Data from S3:", filteredVideos);

    return {
      status: 200,
      data: filteredVideos,
      message: "Videos fetched successfully!",
    };
  } catch (error) {
    console.error("Error fetching videos from S3:", error);
    return {
      status: 500,
      data: null,
      message: "Error fetching videos from S3!",
    };
  }
};

export default getVideosFromS3;
