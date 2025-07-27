import EditorialHeaderDesktop from "./EditorialHeaderDesktop";
import EditorialHeaderMobile from "./EditorialHeaderMobile";

export default function EditorialHeader() {
  return (
    <>
      <div className={`hidden lg:block`}>
        <EditorialHeaderDesktop />
      </div>
      <div className={`lg:hidden`}>
        <EditorialHeaderMobile />
      </div>
    </>
  );
}
