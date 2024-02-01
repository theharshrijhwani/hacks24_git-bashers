import ongoing from "../assets/ongoing.png";
import add from "../assets/add.png";
import market_place from "../assets/market_place.png";
import chat from "../assets/chat.png";
import history from "../assets/history.png";
import feedback from "../assets/feedback.png";
const services_data = [
  {
    name: "Ongoing Projects",
    icon: ongoing,
    url: "https://localhost:5173/ongoing_client",
    // icon: attractions,
  },
  {
    name: "Add Project",
    icon: add,
    url: "http://localhost:5173/add_project_form",
    // icon: transport,
  },
  {
    name: "Chat",
    icon: chat,
    url: "http://localhost:3000/",
    // icon: accommodation,
  },
  {
    name: "History",
    icon: history,
    url: "http://localhost:5173/client_history",
    // icon: hotel,
  },
  {
    name: "Feedback",
    icon: feedback,
    url: "http://localhost:5173/feedback",
  },
];
const designer_data = [
  {
    name: "Ongoing Projects",
    icon: ongoing,
    url: "http://localhost:5173/ongoing_projects_designer",
    // icon: attractions,
  },
  {
    name: "Market Place",
    icon: market_place,
    url: "http://localhost:5173/marketplace",
    // icon: transport,
  },
  {
    name: "Chat",
    icon: chat,
    url: "http://localhost:3000/",
    // icon: accommodation,
  },
  {
    name: "View Feedback",
    icon: feedback,
    url: "http://localhost:5173/feedbacks",
  },
];

export default { services_data, designer_data };
