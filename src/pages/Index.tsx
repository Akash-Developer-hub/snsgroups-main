import { Building, Laptop, MapPin, School, Dumbbell } from "lucide-react";
import { Logo } from "@/components/Logo";
import { MenuItem } from "@/components/MenuItem";
// import { Footer } from "@/components/Footer";
import  Header  from "@/components/Header";
import Footer from "@/components/Footer";

const menuItems = [
  {
    icon: Building,
    title: "SNS Venture Capital & Investment",
    desc:'Funding high-potential startups for strategic ownership stakes',
    
    color: "#DE2A1B",
    bgColor: "linear-gradient(to right, #f9e7e1, #ff5c22)"
  },
  {
    icon: Laptop,
    title: "SNS Square Technologies",
    desc:"Driving digital transformation with cutting-edge IT and software solutions. ",
    link:'https://www.snssquare.com/',
    color: "#B0D402",
    bgColor: "linear-gradient(to right, #d8f3a3, #c5ff1b)"
  },
  {
    icon: MapPin,
    title: "SNS Innovation Hub",
    desc:"Empowering entrepreneurs with mentorship, resources and a platform for innovation.",
    link:'https://snsihub.ai/',
    color: "#E10485",
    bgColor: "linear-gradient(to right, #f4a4c4, #ff1e5f)"
  },
  {
    icon: School,
    title: "SNS Institutions",
    desc:'Fostering holistic growth through high-quality education.',
    link:'https://main.snsgroups.com/',
    color: "#EB510B",
    bgColor: "linear-gradient(to right, #ffb390, #ff5714)"
  },
  {
    icon: Dumbbell,
    title: "SNS Spine",
    desc:'Enabling mental and physical well-being through sports, gaming, entertainment and clubs.',
    link:'https://snsspine.in/',
    color: "#01A3D4",
    bgColor: "linear-gradient(to right, #89eaf2, #13e8ff)"
  }
];

  const Index = () => {
    return (
      <div className="min-h-screenx " > 
        <Header />
        <div className="max-w-6xl mx-auto px-50 py-1 mt-16">
          <div className="relative flex justify-center items-center min-h-[600px]">
            {/* Logo in the center */}
            <div className="absolute left-3 z-5">
              <Logo className="animate-fade-in" />
            </div>
            
            {/* Menu items in a semi-circle */}
            <div className="absolute left-[1px] h-full flex items-center">
              <div className="relative h-[500px] w-[500px]">
                {menuItems.map((item, index) => {
                  // Calculate position on the semi-circle
                  const angle = -50 + (index * 25); // Spread items from -60° to 60°
                  const radian = angle/40;
                  const radius = 215; // Radius of the semi-circle
                  
                  // Calculate x and y positions
                  const x = Math.cos(radian) * radius  ;
                  const y = Math.sin(radian) * radius ;
                  
                  return (
                    <div
                      key={item.title}
                      className="absolute transform items-center  justify-center translate-x-1/2 -translate-y-1/2 animate-fade-in"
                      style={{
                        left: `${radius + x}px`,
                        top: `${radius + y}px`,
                        animationDelay: `${index * 0.1}s`,
                        width: '450px' // Fixed width for menu items
                      }}
                    >
                      <MenuItem {...item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
    
  export default Index;
