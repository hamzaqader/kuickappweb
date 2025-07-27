import Button from "@/components/ui/Button/Button";
import { ButtonSize, ButtonVariant } from "@/types/types";

export default function NewsLetter() {
  return (
    <div
      className={`p-6 sm:p-8 lg:p-[48px] rounded-3xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6`}
      style={{
        background: `linear-gradient(97.82deg, #FFF1EF 2.82%, #FFF4DD 50.39%, #EFF9F9 74.18%, #F9F9F6 97.96%)`,
      }}
    >
      <div className="max-w-xl">
        <h1 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-[20px]">
          Sign up for our newsletter
        </h1>
        <p className="text-base sm:text-xl font-light mb-0">
          Insights, case studies, and updates from the experts team at KuickApp
        </p>
      </div>

      <div className="w-full sm:w-auto">
        <Button
          variant={ButtonVariant.BTN_PRIMARY}
          size={ButtonSize.BTN_LARGE}
          className="w-full sm:w-auto"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}
