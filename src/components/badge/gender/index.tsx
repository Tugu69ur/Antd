import ManImg from "assets/icons/man.svg";
import WomanImg from "assets/icons/woman.svg";

interface GenderBadgeProps {
  status: number;
}

export const GenderBadge: React.FC<GenderBadgeProps> = ({ status }) => {
  let text = "";
  let color = "";
  let img;
  switch (status) {
    case 1:
      color = "bg-[#ECFDF3] text-[#027A48]";
      text = "Эрэгтэй";
      img = <img src={ManImg} width={8} />;
      break;
    default:
      color = "bg-[#FFF1F3] text-[#C01048]";
      text = "Эмэгтэй";
      img = <img src={WomanImg} width={8} />;
      break;
  }
  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-medium truncate ${color}`}
    >
      <div>{img}</div>
      <div>{text}</div>
    </span>
  );
};
