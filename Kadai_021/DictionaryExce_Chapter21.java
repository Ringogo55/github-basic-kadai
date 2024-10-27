package Kadai_021;

public class DictionaryExce_Chapter21 {
	public static void main(String[] args) {
		
		Dictionary_Chapter21 dictionary= new Dictionary_Chapter21();
	
		String[] fruitArray = {"apple", "banana", "grape", "orange"};
		
		for (String word : fruitArray) {
			dictionary.search(word);
		}
	}
}
