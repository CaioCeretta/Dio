public class DynamicTyping {
  public static void main(String[] args) {
    int number = 10;
    myNumber = "Text";

    System.out.println(myNumber); // String cannot be converted to int, which JS allows
  }
}