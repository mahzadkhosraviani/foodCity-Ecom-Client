import { GetFetch } from "@/app/utils/fetch";
import { numberFormat, salePercent } from "@/app/utils/helper";
import Product from "@/components/products/product";
import ShoppingCart from "@/components/products/shoppingCart";
import Image from "next/image";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};
type ProductImage = {
  id: number;
  image: string;
};
export default async function ProductsPage({ params }: Props) {
  const Params = await params;
  const product = await GetFetch(`/products/${decodeURI(Params.slug)}`);
  const randomProduct = await GetFetch("/random-products?count=4");

  return (
    <>
      {" "}
      <section className="single_page_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row gy-5">
                <div className="col-sm-12 col-lg-6">
                  <h3 className="fw-bold mb-4">{product.name}</h3>
                  <h6>
                    {product.sale_price ? (
                      <>
                        {" "}
                        <del>{product.price}</del>
                        <span>{product.sale_price}</span>
                      </>
                    ) : (
                      <span>{numberFormat(product.price)}</span>
                    )}
                    <span>تومان</span>
                    {product.sale_price && (
                      <div className="text-danger fs-6">
                        {salePercent(product.price, product.sale_price)}%تخفیف
                      </div>
                    )}
                  </h6>
                  <p>{product.description}</p>
                  <ShoppingCart product={product} />
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                      ></button>
                      {product.images.map((img: ProductImage, index) => (
                        <button
                          key={index}
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={index + 1}
                        ></button>
                      ))}
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <Image
                          unoptimized
                          src={product.primary_image}
                          width={464}
                          height={309}
                          className="d-block w-100"
                          alt="product-primaryimage"
                        />
                      </div>
                      {product.images.map((img: ProductImage) => (
                        <div key={img.id} className="carousel-item">
                          <Image
                            unoptimized
                            width={464}
                            height={309}
                            src={img.image}
                            className="d-block w-100"
                            alt="prouct-image"
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="food_section my-5">
        <div className="container">
          <div className="row gx-3">
            {randomProduct.map((product: ProductImage, index: number) => (
              <div key={index} className="col-sm-6 col-lg-3">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
