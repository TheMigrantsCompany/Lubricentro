import ProductForm from "../../components/product_form/ProductForm";
import ServiceForm from "../../components/service_form/ServiceForm";

const ProductService = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 p-4 bg-gray-100 min-h-screen items-center">
            <div className="w-full md:w-1/2 lg:w-1/3">
                <ProductForm />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
                <ServiceForm />
            </div>
        </div>
    );
};

export default ProductService;

