import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";

export default function Product() {
    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi in unde fugiat velit nulla ullam esse, quam facilis qui illum iusto rerum laudantium perspiciatis. Deserunt quibusdam illo earum dolor dolores?
                </p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}