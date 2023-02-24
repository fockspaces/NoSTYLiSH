const activateBtn = (product) => {
  // make colors be singly-selected
  const colorOptions = document.querySelectorAll(
    '#color-options input[type="checkbox"]'
  );

  const sizeOptions = document.querySelectorAll(
    '#size-options input[type="radio"]'
  );

  let selectedColorInput;
  let selectedSizeInput;

  const quantityInput = document.querySelector("#quantity-input");
  const minusBtn = document.querySelector("#minus-btn");
  const plusBtn = document.querySelector("#plus-btn");
  const addToCartBtn = document.querySelector("#add-to-cart");

  colorOptions.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      // If this checkbox is now checked, uncheck all others
      if (checkbox.checked) {
        colorOptions.forEach((otherCheckbox) => {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });

  // inner function to reset the options
  const resetOptions = () => {
    sizeOptions.forEach((sizeOption) => {
      sizeOption.disabled = true;
      sizeOption.checked = false;
    });

    selectedSizeInput = null;
    selectedColorInput = null;

    quantityInput.value = 1;
    quantityInput.disabled = true;
    minusBtn.disabled = true;
    plusBtn.disabled = true;
  };

  resetOptions();

  // make the size dynamically change with color
  let availableQuantity = 1;
  let selectedColor, selectedSize;
  colorOptions.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      resetOptions();
      selectedColorInput = checkbox;
      selectedColor = checkbox.value;
      const availableSizes = product.variants
        .filter((variant) => variant.color_code === selectedColor)
        .map((variant) => variant.size);

      sizeOptions.forEach((sizeOption) => {
        if (availableSizes.includes(sizeOption.value)) {
          sizeOption.disabled = false;
        } else {
          sizeOption.disabled = true;
        }
      });

      quantityInput.value = 1;
    });
  });

  sizeOptions.forEach((sizeOption) => {
    sizeOption.addEventListener("click", () => {
      selectedSizeInput = sizeOption;
      selectedSize = sizeOption.value;
      const variant = product.variants.find(
        (v) => v.color_code === selectedColor && v.size === selectedSize
      );
      if (variant) {
        availableQuantity = variant.stock;
      } else {
        availableQuantity = 0; // no matching variant, so no stock available
      }
      quantityInput.value = 1;
      quantityInput.disabled = false;
      quantityInput.max = availableQuantity;
      console.log(availableQuantity);
      minusBtn.disabled = false;
      plusBtn.disabled = false;
    });
  });

  // add keypress event listener to limit input to numbers only
  quantityInput.addEventListener("keypress", (event) => {
    const key = event.keyCode;
    if (key < 48 || key > 57) {
      event.preventDefault();
    }
  });

  // add change event listener to limit maximum value
  quantityInput.addEventListener("change", () => {
    const value = parseInt(quantityInput.value);
    if (value > availableQuantity) {
      quantityInput.value = availableQuantity;
    }
  });

  minusBtn.addEventListener("click", () => {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
      value--;
      quantityInput.value = value;
    }
  });

  plusBtn.addEventListener("click", () => {
    let value = parseInt(quantityInput.value);
    if (value < availableQuantity) {
      value++;
      quantityInput.value = value;
    }
  });
  
  const mainImageContainer = document.querySelector(".main-image-container");
  const thumbnailImages = document.querySelectorAll(".thumbnail-image");

  thumbnailImages.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const thumbnailImageUrl = thumbnail.style.backgroundImage.slice(5, -2);
      mainImageContainer.style.backgroundImage = `url(${thumbnailImageUrl})`;
    });
  });

  const onCartSubmit = (event) => {
    event.preventDefault();
    //todo : selected check

    if (!selectedColorInput || !selectedSizeInput) {
      alert("Please select a color and a size before adding to cart.");
      return;
    }

    const selectedColor = selectedColorInput.value;
    const selectedSize = selectedSizeInput.value;
    console.log("Selected color: ", selectedColor);
    console.log("Selected size: ", selectedSize);
    console.log("Selected Quantity:", quantityInput.value);
  };

  // add event listener to the Add to Cart button
  addToCartBtn.addEventListener("click", onCartSubmit);
};

export { activateBtn };
