
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { MessageSquare, Send } from "lucide-react";

type Message = {
  content: string;
  sender: "bot" | "user";
};

type PropertyType = "ready" | "off-plan" | "rental" | null;
type PropertyCategory = "apartment" | "villa" | "townhouse" | null;

const initialMessages: Message[] = [
  {
    content: "👋 Hi! I'm your property assistant for UAE. I'll help you find the perfect property. Are you looking for ready properties, off-plan, or rentals?",
    sender: "bot",
  },
];

const PropertyChatbot = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [propertyType, setPropertyType] = useState<PropertyType>(null);
  const [propertyCategory, setPropertyCategory] = useState<PropertyCategory>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      content: input,
      sender: "user",
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Process the conversation state
    setTimeout(() => {
      processConversation(userMessage.content);
    }, 1000);
  };

  const processConversation = (userInput: string) => {
    const lowercaseInput = userInput.toLowerCase();
    
    if (!propertyType) {
      // Determine property type from user input
      if (lowercaseInput.includes("ready") || lowercaseInput.includes("buy")) {
        setPropertyType("ready");
        askForPropertyCategory();
      } else if (lowercaseInput.includes("off-plan") || lowercaseInput.includes("new")) {
        setPropertyType("off-plan");
        askForPropertyCategory();
      } else if (lowercaseInput.includes("rent") || lowercaseInput.includes("rental")) {
        setPropertyType("rental");
        askForPropertyCategory();
      } else {
        // Couldn't determine, ask explicitly
        addBotMessage("I'm not sure what type of property you're looking for. Please select one: Ready properties, Off-plan, or Rentals?");
      }
    } else if (!propertyCategory) {
      // Determine property category from user input
      if (lowercaseInput.includes("apartment") || lowercaseInput.includes("flat")) {
        setPropertyCategory("apartment");
        showPropertyOptions();
      } else if (lowercaseInput.includes("villa") || lowercaseInput.includes("house")) {
        setPropertyCategory("villa");
        showPropertyOptions();
      } else if (lowercaseInput.includes("townhouse") || lowercaseInput.includes("town house")) {
        setPropertyCategory("townhouse");
        showPropertyOptions();
      } else {
        // Couldn't determine, ask explicitly
        addBotMessage("What type of property are you interested in? Apartment, Villa, or Townhouse?");
      }
    } else if (!showLeadForm) {
      // After showing property options, ask for contact details
      addBotMessage("Great! I've found some properties that match your criteria. To connect you with a specialist and share more details, may I have your phone number?");
      setShowLeadForm(true);
    }
  };

  const askForPropertyCategory = () => {
    const propertyTypeText = propertyType === "ready" ? "ready" : propertyType === "off-plan" ? "off-plan" : "rental";
    addBotMessage(`Great! You're looking for ${propertyTypeText} properties. What type of property are you interested in? (Apartment, Villa, Townhouse)`);
  };

  const showPropertyOptions = () => {
    const propertyTypeText = propertyType === "ready" ? "ready" : propertyType === "off-plan" ? "off-plan" : "rental";
    const propertyCategoryText = propertyCategory === "apartment" ? "apartments" : propertyCategory === "villa" ? "villas" : "townhouses";
    
    addBotMessage(`Perfect! I've found some amazing ${propertyTypeText} ${propertyCategoryText} in prime UAE locations. Here are a few options:`);
    
    // Wait a bit before showing property options
    setTimeout(() => {
      const properties = [
        `**Premium ${propertyCategoryText.slice(0, -1)} in Dubai Marina**\n✓ ${propertyCategory === "apartment" ? "2 Bedrooms" : "4 Bedrooms"}\n✓ Modern Design\n✓ Sea View\n✓ Starting from AED ${propertyType === "rental" ? "120,000/year" : "1,500,000"}`,
        `**Exclusive ${propertyCategoryText.slice(0, -1)} in ${propertyCategory === "apartment" ? "Downtown Dubai" : "Arabian Ranches"}**\n✓ ${propertyCategory === "apartment" ? "3 Bedrooms" : "5 Bedrooms"}\n✓ Luxury Finishes\n✓ ${propertyCategory === "apartment" ? "Burj Khalifa View" : "Private Pool"}\n✓ Starting from AED ${propertyType === "rental" ? "180,000/year" : "2,800,000"}`,
        `**Contemporary ${propertyCategoryText.slice(0, -1)} in ${propertyCategory === "apartment" ? "Palm Jumeirah" : "Damac Hills"}**\n✓ ${propertyCategory === "apartment" ? "4 Bedrooms" : "6 Bedrooms"}\n✓ Premium Quality\n✓ ${propertyCategory === "apartment" ? "Beachfront" : "Golf Course View"}\n✓ Starting from AED ${propertyType === "rental" ? "250,000/year" : "3,500,000"}`
      ];
      
      properties.forEach((property, index) => {
        setTimeout(() => {
          addBotMessage(property);
        }, index * 1000);
      });
      
      // Ask which property they prefer
      setTimeout(() => {
        addBotMessage("Which property are you most interested in? Or would you like to see more options?");
      }, properties.length * 1000 + 500);
    }, 1000);
  };

  const addBotMessage = (content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        content,
        sender: "bot",
      },
    ]);
    setIsTyping(false);
  };

  const handleSubmitPhoneNumber = () => {
    if (!phoneNumber || phoneNumber.length < 8) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    setShowLeadForm(false);
    addBotMessage(`Thank you for providing your contact information. A property specialist will call you at ${phoneNumber} shortly to discuss these properties and help you find your perfect home in UAE.`);
    
    // Simulate sending to Zapier or CRM
    toast({
      title: "Lead Submitted",
      description: "Your information has been sent to our property specialists.",
    });
    
    // In a real implementation, you would send this to Zapier or your CRM
    console.log("Submitting lead:", {
      phoneNumber,
      propertyType,
      propertyCategory,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div id="chatbot" className="section-container">
      <h2 className="section-title">Property Finder Assistant</h2>
      <p className="section-subtitle">
        Our AI chatbot will help you find the perfect property in minutes
      </p>
      
      <div className="max-w-3xl mx-auto mt-8">
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Chat header */}
          <div className="bg-realestate-navy p-4 text-white flex items-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
              <MessageSquare className="text-realestate-navy" size={20} />
            </div>
            <div>
              <h3 className="font-semibold">Property Assistant</h3>
              <p className="text-xs text-gray-300">Online | Replies instantly</p>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            <div className="flex flex-col space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[80%] ${
                    message.sender === "bot"
                      ? "self-start bg-realestate-blue text-white rounded-lg rounded-tl-none"
                      : "self-end bg-gray-200 text-gray-800 rounded-lg rounded-tr-none"
                  } p-3`}
                >
                  <div className="whitespace-pre-line">{message.content}</div>
                </div>
              ))}
              
              {isTyping && (
                <div className="self-start bg-realestate-blue text-white rounded-lg rounded-tl-none p-3 max-w-[80%]">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Chat input or phone form */}
          <div className="p-4 border-t border-gray-200">
            {showLeadForm ? (
              <div className="flex flex-col space-y-3">
                <p className="text-sm text-realestate-charcoal">Please enter your phone number to get property details:</p>
                <div className="flex space-x-2">
                  <Input
                    type="tel"
                    placeholder="Your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    className="bg-realestate-navy hover:bg-realestate-blue" 
                    onClick={handleSubmitPhoneNumber}
                  >
                    Submit
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  By submitting, you agree to our terms and privacy policy. We'll connect you with a property specialist.
                </p>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button 
                  className="bg-realestate-navy hover:bg-realestate-blue"
                  onClick={handleSendMessage}
                >
                  <Send size={18} />
                </Button>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center mt-6 text-sm text-realestate-charcoal">
          <p>
            You can ask about properties in specific areas, price ranges, or amenities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyChatbot;
