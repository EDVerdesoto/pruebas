package ec.edu.espe.HOManagment.controller;

/**
 *
 * @author Edison Verdesoto, Code Warriors, DCCO-ESPE
 */
public class Decimals {
    public static Double roundToTwoTenths(Double amountToRound){
        Double amountRounded;
        int dollars = (int) (amountToRound/1) ;
        Double cents = (amountToRound%1)*100;
        
        if(cents == 0){
            amountRounded = amountToRound;
        }
        else {
            cents = (double) Math.round(cents);
            amountRounded = dollars + (cents/100);
        }
        
        return amountRounded;
    }
}

