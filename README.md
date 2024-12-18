# ParkEase Web App 🚗

![ParkEase Banner](./public/parkease-banner1.png "ParkEase Parking Slot Management")

ParkEase is a modern web application that simplifies parking management and slot detection. Built with cutting-edge web technologies, it delivers a seamless user experience and ensures scalability for real-world deployment.

## ✨ Features
- **User Authentication**
- **Smooth Scrolling**
- **Cool Animations**
- **Intuitive UI**
- **Scalable Backend**
- **Real Time Parking Slot Monitoring**
- **High Availability and Speed**

## 🛠 Tech Stack
- **Frontend**:
  - [Next.js](https://nextjs.org): React-based framework for server-side rendering and static site generation.
  - [React.js](https://reactjs.org): Powerful library for building user interfaces.
  - [Material Tailwind UI](https://www.material-tailwind.com/): An attractive UI library with pre-built Tailwind CSS components.
  - [Lenis](https://github.com/studio-freight/lenis): Smooth scroll library for a polished user experience.
  - [Framer Motion](https://www.framer.com/motion/): Declarative animations and transitions.

- **Backend**:
  - [Prisma](https://www.prisma.io): ORM for type-safe and efficient database access.
  - [AWS S3](https://aws.amazon.com/s3): Secure and scalable storage for static assets.
  - [AWS CloudFront](https://aws.amazon.com/cloudfront/): CDN for fast and secure content delivery.

- **Authentication**:
  - [Clerk](https://clerk.dev): Robust authentication system with support for multi-factor authentication and social login.

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Ensure Node.js (v16 or above) is installed.
- **AWS Account**: For S3 and CloudFront setup.
- **Clerk API Keys**: Required for authentication.
- **Prisma**: Set up your database schema with Prisma.

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Park-Ease/ParkEase-Web-App.git
   cd ParkEase-Web-App
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**: 
Create a .env file in the root directory and add the following:
   ```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/auth/callback
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/sign-in
    CLERK_SECRET_KEY=""

    AWS_REGION=""
    AWS_S3_BUCKET_NAME=""
    AWS_ACCESS_KEY_ID=""
    AWS_SECRET_ACCESS_KEY=""
    AWS_CLOUDFRONT_URL="https://<cloudfront_id>.cloudfront.net"

    DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.xrttr.mongodb.net/parkease?retryWrites=true&w=majority&appName=Cluster0"
    NODE_ENV="development"
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

The app will be available at http://localhost:3000.


## 🛡 Security
ParkEase prioritizes user security with secure authentication flows, HTTPS via AWS CloudFront, and strict access controls.

## 🤝 Contributing
Contributions are welcome! To contribute:

- Fork the repository.
- Create a new branch: git checkout -b feature-name.
- Commit your changes: git commit -m 'Add feature'.
- Push to the branch: git push origin feature-name.
- Submit a pull request.

## 🌟 Acknowledgments
- A special thanks to my friends for their incredible support and contributions:
  - [Ajay S Biradar](https://github.com/Ajay-S-Biradar)
  - [Aditya Kiran](https://github.com/adityakiran1423)
  - [Ashish Baghel](https://github.com/b-ash-18)

## 📬 Contact
For questions, suggestions, or feedback, feel free to reach out:

- Email: sslayer441@gmail.com
- GitHub: ShadowSlayer03

Enjoy using ParkEase! 🚗💨