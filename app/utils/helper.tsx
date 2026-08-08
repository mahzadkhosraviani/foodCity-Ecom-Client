const numberFormat = (number:number) => {
  return new Intl.NumberFormat().format(number);
};

const handleError = (message: string | Record<string, string[]>) => {
  if (typeof message === "object" && message !== null) {
    const errors = [];

    Object.keys(message).forEach((key) => {
      message[key].forEach((e) => {
        errors.push(e);
      });
    });

    return errors.join(", ");
  }

  return message;
};
const salePercent=(price:number,salePrice:number)=>{
  return Math.round(((price-salePrice)/price)*100);

}

export { numberFormat, handleError,salePercent };
