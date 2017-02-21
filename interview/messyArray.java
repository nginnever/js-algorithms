// messyArray.java

import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;

public class messyArray
{
  public static int[] heapSort(int[] list, int k) {
    int slider = k+1;
    int n = list.length;
    int[] newArr = new int[n];

    Queue<Integer> queue = new PriorityQueue<>(k+1);
    
    for(int i=0; i<k; i++) {
      queue.add(list[i]);
    }

    for(int j=k+1; j<n; j++) {
      list[j-(k+1)] = queue.poll();
      queue.add(list[j]);
    }

    for(int z=0; z<k; z++) {
      list[(n-(k+1)) + z] = queue.poll();
    }
  
    return list;
  }
  public static void main(String[] args) {
    int[] test = {8, 14, 1, 47, 44, 1000, 99, 100, 1400, 1399};
    int[] sorted = heapSort(test, 2);
    for(int i=0; i<sorted.length; i++) {
      System.out.println(sorted[i]);
    }
  }
}
