

const Loader = () => {
  return (
    <div class="container flex flex-col md:flex-row w-full mt-[5%]">
      <div class="basic 1/4 ">
        <img
          class="object-cover w-[80%] md:w-full h-[90%] max-h-64 mx-auto"
          src="/icons/placeholder.svg"
          alt="loader"
        />
      </div>

      <div class="ph-item basic 3/4 flex-1">
        <div class="ph-col-12">
          <div class="ph-row">
            <div class="ph-col-10 big"></div>
            <div class="ph-col-1 empty big"></div>
            <div class="ph-col-8"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-10"></div>
            <div class="ph-col-8"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
          </div>
          <div class="ph-row">
            <div class="ph-col-6 big"></div>
            <div class="ph-col-4 empty big"></div>
            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-4"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;