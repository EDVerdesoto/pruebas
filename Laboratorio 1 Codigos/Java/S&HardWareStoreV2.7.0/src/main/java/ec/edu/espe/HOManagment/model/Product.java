package ec.edu.espe.HOManagment.model;
import java.io.Serializable;

/**
 *
 * @author Code Warriors, DCCO-ESPE
 */
public class Product implements Serializable {

    private String name;
    private float price;
    private String income;
    private int stock;
    private double revenue;

    public Product(String name, float price, String income, int stock, double revenue) {
        this.name = name;
        this.price = price;
        this.income = income;
        this.stock = stock;
        this.revenue = revenue;
    }
    
    public Product(){
        
    }
    @Override
    public String toString() {
        return "Product{" + "name=" + name + ", price=" + price + ", income=" + income + ", stock=" + stock + ", revenue=" + revenue + '}';
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the price
     */
    public float getPrice() {
        return price;
    }

    /**
     * @param price the price to set
     */
    public void setPrice(float price) {
        this.price = price;
    }

    /**
     * @return the income
     */
    public String getIncome() {
        return income;
    }

    /**
     * @param income the income to set
     */
    public void setIncome(String income) {
        this.income = income;
    }

    /**
     * @return the stock
     */
    public int getStock() {
        return stock;
    }

    /**
     * @param stock the stock to set
     */
    public void setStock(int stock) {
        this.stock = stock;
    }

    /**
     * @return the revenue
     */
    public double getRevenue() {
        return revenue;
    }

    /**
     * @param revenue the revenue to set
     */
    public void setRevenue(double revenue) {
        this.revenue = revenue;
    }

}
