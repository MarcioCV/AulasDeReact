import "./style.css";
interface UserBannerProps {
  photo: string;
  name: string;
}
export function UserBanner({ photo, name }: UserBannerProps) {
  return (
    <div className="banner">
      <img src={photo} alt="" />
      <label htmlFor="">{name}</label>
    </div>
  );
}
