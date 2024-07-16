import ProductForm from "../../components/product_form/ProductForm";
import ServiceForm from "../../components/service_form/ServiceForm";

const ProductService = () => {
    return (
        <div className="floex flex-col space-y-8">
            <ProductForm/>
            <ServiceForm/>
        </div>
    );
};

export default ProductService;