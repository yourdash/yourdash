import {Instance} from "./instance";

let instance = new Instance()

export { instance }

instance
  .__internal_init()
  .then(() => {
    return 0;
  })
  .catch((err) => {
    console.error(
      "An error occurred during the YourDash instance's startup!\n",
      err,
    );
  });
