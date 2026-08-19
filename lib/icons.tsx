import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaWordpress,
  FaGoogle,
  FaFacebook,
  FaAndroid,
  FaRobot,
  FaShieldAlt,
  FaCreditCard,
  FaUniversity,
  FaChartLine,
  FaUsers,
  FaTools,
  FaHeadset,
  FaBullseye,
  FaClipboardCheck,
  FaPuzzlePiece,
  FaComments,
  FaClock,
  FaHandshake,
  FaExchangeAlt,
  FaMicrosoft,
  FaCertificate,
  FaDatabase,
  FaBalanceScale,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IconType } from "react-icons";

export const skillIconMap: Record<string, IconType> = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  PHP: FaPhp,
  WordPress: FaWordpress,
  MySQL: SiMysql,
  "REST APIs": FaExchangeAlt,
  "Responsive Design": FaHtml5,
  "Payment Processing": FaCreditCard,
  "Transaction Monitoring": FaChartLine,
  "Core Banking Systems (CBS)": FaUniversity,
  "Payment Gateways": FaCreditCard,
  "Database Administration (DBA)": FaDatabase,
  "AML/CFT Compliance": FaBalanceScale,
  "Technical Troubleshooting": FaTools,
  "Google Analytics": FaGoogle,
  "Google Ads": FaGoogle,
  "Facebook Ads": FaFacebook,
  "Digital Marketing": FaBullseye,
  "Community Management": FaUsers,
  "Problem Solving": FaPuzzlePiece,
  Communication: FaComments,
  "Customer Support": FaHeadset,
  "Attention to Detail": FaClipboardCheck,
  "Team Collaboration": FaHandshake,
  "Time Management": FaClock,
};

export const projectStackIconMap: Record<string, IconType> = {
  PHP: FaPhp,
  MySQL: SiMysql,
  "HTML/CSS": FaHtml5,
  JavaScript: FaJs,
  Android: FaAndroid,
  "Machine Learning": FaRobot,
  Security: FaShieldAlt,
  AI: FaRobot,
};

export const focusIconMap: Record<string, IconType> = {
  payments: FaCreditCard,
  banking: FaUniversity,
  code: FaJs,
  marketing: FaBullseye,
};

export const certProviderIconMap: Record<string, IconType> = {
  google: FaGoogle,
  microsoft: FaMicrosoft,
  default: FaCertificate,
};

export function getSkillIcon(name: string): IconType | null {
  return skillIconMap[name] ?? null;
}

export function getStackIcon(name: string): IconType | null {
  return projectStackIconMap[name] ?? null;
}
