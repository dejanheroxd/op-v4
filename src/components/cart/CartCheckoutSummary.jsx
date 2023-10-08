import { ArrowRight, Lock } from "phosphor-react";

function CartCheckoutSummary({ payAmount }) {
  return (
    <div>
      <div className="m-5">
        <div className="mb-3 flex justify-between">
          <p className="text-gray-800 font-semibold ">Total</p>
          <p className="text-gray-800 font-semibold ">${payAmount}</p>
        </div>
        <div className="md:hover:shadow-[0_2px_4px_rgb(0,0,0,0.5)] relative hover:cursor-pointer rounded-md text-center duration-200 bg-blue-800 hover:bg-blue-700 active:bg-blue-600 text-white">
          <button className="py-3 font-semibold">Checkout</button>
          <ArrowRight className="absolute top-[16px] right-3" size={19} />
        </div>
        <div className="pt-4">
          <div className="flex gap-x-2 justify-center items-center h-11">
            <Lock size={20} color="gray" />
            <a
              href="https://snipcart.com/security?utm_source=cart_referral&utm_medium=powered_by&utm_campaign=powered_by_ref&utm_term=snipcart.com"
              className="mb-1 text-gray-800 underline"
            >
              Secured by Snipcart
            </a>
          </div>
          <div className="flex h-9 justify-center gap-x-7 items-center">
            <svg
              className="w-[65px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              id="visa"
            >
              <polygon
                fill="#1565c0"
                points="17.202 32.269 21.087 32.269 23.584 16.732 19.422 16.732"
              ></polygon>
              <path
                fill="#1565c0"
                d="M13.873 16.454l-3.607 11.098-.681-3.126c-1.942-4.717-5.272-6.659-5.272-6.659l3.456 14.224h4.162l5.827-15.538H13.873zM44.948 16.454h-4.162l-6.382 15.538h3.884l.832-2.22h4.994l.555 2.22H48L44.948 16.454zM39.954 26.997l2.22-5.826 1.11 5.826H39.954zM28.855 20.893c0-.832.555-1.665 2.497-1.665 1.387 0 2.775 1.11 2.775 1.11l.832-3.329c0 0-1.942-.832-3.607-.832-4.162 0-6.104 2.22-6.104 4.717 0 4.994 5.549 4.162 5.549 6.659 0 .555-.277 1.387-2.497 1.387s-3.884-.832-3.884-.832l-.555 3.329c0 0 1.387.832 4.162.832 2.497.277 6.382-1.942 6.382-5.272C34.405 23.113 28.855 22.836 28.855 20.893z"
              ></path>
              <path
                fill="#ff9800"
                d="M9.711,25.055l-1.387-6.936c0,0-0.555-1.387-2.22-1.387c-1.665,0-6.104,0-6.104,0
	S8.046,19.229,9.711,25.055z"
              ></path>
            </svg>
            <svg
              className="w-[33px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="mastercard"
            >
              <path
                fill="#FF5F00"
                d="M15.245 17.831h-6.49V6.168h6.49v11.663z"
              ></path>
              <path
                fill="#EB001B"
                d="M9.167 12A7.404 7.404 0 0 1 12 6.169 7.417 7.417 0 0 0 0 12a7.417 7.417 0 0 0 11.999 5.831A7.406 7.406 0 0 1 9.167 12z"
              ></path>
              <path
                fill="#F79E1B"
                d="M24 12a7.417 7.417 0 0 1-12 5.831c1.725-1.358 2.833-3.465 2.833-5.831S13.725 7.527 12 6.169A7.417 7.417 0 0 1 24 12z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCheckoutSummary;
