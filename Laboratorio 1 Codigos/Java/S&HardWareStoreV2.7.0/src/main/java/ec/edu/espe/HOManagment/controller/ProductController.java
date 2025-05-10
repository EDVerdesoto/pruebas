package ec.edu.espe.HOManagment.controller;

import com.mongodb.client.model.Filters;
import ec.edu.espe.HOManagment.model.Product;
import java.util.Collection;
import org.bson.Document;

/**
 *
 * @author Code Warriors, DCCO-ESPE
 */
public class ProductController extends BasicController<Product> {

    double revenuePercentage = 1.3f;

    public ProductController(Product object, String collectionName) {
        super(object, collectionName);
    }

    public ProductController() {
        super(new Product(), "products");
    }

    public Document buildDocument(Product product) {
        Document document = new Document();

        document.append("name", product.getName()).
                append("price", product.getPrice()).
                append("income", product.getIncome()).
                append("stock", product.getStock()).
                append("PVP", calculateRevenue(product.getPrice()));
        return document;
    }

    public double calculateRevenue(double price) {
        
        double newPrice = price * revenuePercentage;
        return Decimals.roundToTwoTenths(newPrice);
    }
    
    
}
