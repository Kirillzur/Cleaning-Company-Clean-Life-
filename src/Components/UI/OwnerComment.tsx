import ProfileLogo from "../../Media/images/CeoProfileLogo.png";

interface OwnerCommentProps { 
    title: string;
    name: string;
    description: string;
}

const OwnerComment = ({ title, name, description }: OwnerCommentProps) => {
  return (
    <>
      <div className=" bg-background_secondary mt-5.5  w-[464px] h-[220px] rounded-[12px] shadow-[0_6px_9px_rgba(0,0,0,0.20)] flex flex-col items-center justify-center">
        <p className="text-primary text-[18px] max-w-[350px]">
          {title}
        </p>
        <div className="mt-4 flex w-full items-center pl-7">
          <img className="flex" src={ProfileLogo} alt="Profile Logo" />
          <div className="ml-3">
            <p className="text-primary font-bold">{name}</p>
            <p className="text-[12px] text-light_gray">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerComment;
