import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  const user = {
    name: "Md Galib Hossain",
    userImage:
      "https://i.ibb.co/jDqj9cY/360-F-366887372-QDqbw-NPR8-GHQgn-Zm-OV3nwh-GBXDc-Lb8er.jpg",
    roles: [{ name: "Full Stack Developer" }],
    email: "mdgalibhossain23@gmail.com",
    headline:
      "Driven by Innovation and a Passion for Problem-Solving in Full Stack Web Development",
    age: "25",
    status: "available",
    aboutMe: "I'm a full stack web developer",
    profiles: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/md.galibhossain17",
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/md-galib-hossain",
      },
    
      { name: "Github", link: "https://github.com/md-galib-hossain" },
      { name: "Fiverr", link: "https://www.fiverr.com/mdgalibhossain1" },
    ],
    presentAddress: "Mirpur1,Dhaka,Bangladesh",
    permanentAddress: "Faridpur,Dhaka,Bangladesh",
    resumeLinkId: "1tI_j0WF5VSlMoGBnrugALl6EVcQiFeJ1",
    languages: [
      { type: "Bangla", level: "Fluent", writing: true },
      { type: "English", level: "Fluent", writing: true },
      { type: "English", level: "Intermediate", writing: false },
    ],
    projects : [
      {
        id: 1,
        title: "CareConnect",
        coverImage: "https://i.ibb.co/tXJGnGw/Screenshot-2024-06-29-230011.png",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        description: { heading: "A healthcare management system", text: "This project helps connect patients with doctors and manage appointments efficiently." },
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        links: {
          frontEnd: "https://github.com/username/CareConnect-frontend",
          backEnd: "https://github.com/username/CareConnect-backend",
          liveLink: "https://careconnect.com",
        },
      },
      {
        id: 2,
        title: "ShopEasy",
        coverImage: "https://i.ibb.co/tXJGnGw/Screenshot-2024-06-29-230011.png",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        description: { heading: "An e-commerce platform", text: "This project is an online store allowing users to browse products, add to cart, and checkout securely." },
        technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
        links: {
          frontEnd: "https://github.com/username/ShopEasy-frontend",
          backEnd: "https://github.com/username/ShopEasy-backend",
          liveLink: "https://shopeasy.com",
        },
      },
      {
        id: 3,
        title: "EduLearn",
        coverImage: "https://i.ibb.co/tXJGnGw/Screenshot-2024-06-29-230011.png",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        description: { heading: "An online learning platform", text: "This project provides a variety of online courses for users to enhance their skills and knowledge." },
        technologies: ["HTML", "CSS", "JavaScript", "Vue.js"],
        links: {
          frontEnd: "https://github.com/username/EduLearn-frontend",
          backEnd: "https://github.com/username/EduLearn-backend",
          liveLink: "https://edulearn.com",
        },
      },
      {
        id: 4,
        title: "Foodie's Paradise",
        coverImage: "https://i.ibb.co/tXJGnGw/Screenshot-2024-06-29-230011.png",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        description: { heading: "A food delivery app", text: "This project allows users to order food from various restaurants and have it delivered to their doorstep." },
        technologies: ["HTML", "CSS", "JavaScript", "Angular"],
        links: {
          frontEnd: "https://github.com/username/FoodiesParadise-frontend",
          backEnd: "https://github.com/username/FoodiesParadise-backend",
          liveLink: "https://foodiesparadise.com",
        },
      },
    
    ]
  };
  return (
    <>
     <Navbar user={user}/>
      <div className="min-h-screen">

      {children}
      </div>
      <Footer socials={user?.profiles}/>
    </>
  );
};

export default layout;
