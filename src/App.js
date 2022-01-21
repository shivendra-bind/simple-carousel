import { Caroucel, CaroucelItem } from "./components/Caroucel/Caroucel";

function App() {
  return (
    <div className="">
      <Caroucel>
        <CaroucelItem>
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
            width="100vw"
            height="400"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: First slide"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#555" dy=".3em">
              First slide
            </text>
          </svg>
        </CaroucelItem>
        <CaroucelItem>
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
            width="100vw"
            height="400"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: First slide"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#555" dy=".3em">
              Second slide
            </text>
          </svg>
        </CaroucelItem>
        <CaroucelItem>
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
            width="100vw"
            height="400"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: First slide"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#555" dy=".3em">
              Third slide
            </text>
          </svg>
        </CaroucelItem>
      </Caroucel>
    </div>
  );
}

export default App;
