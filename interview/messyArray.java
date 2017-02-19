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
      //System.out.println(list[j-(k+1)]);
    }

    for(int z=0; z<k; z++) {
      list[(n-(k+1)) + z] = queue.poll();
    }

    // for(var i=0; i<=k; i++) {
    //   heap.push(Arr[i])
    // }

    // for(var j=k+1; j<n; j++){
    //   Arr[j-(k+1)] = heap.pop()
    //   heap.push(Arr[j])
    // }

    // for(var z=0; z<k+1; z++) {
    //   Arr[(n-(k+1)) + z] = heap.pop()
    // }
  
    return list;
  }
  public static void main(String[] args) {
    System.out.println("Hello World!");
    int[] test = {8, 14, 1, 47, 44, 1000, 99, 100, 1400, 1399};
    int[] sorted = heapSort(test, 2);
    for(int i=0; i<sorted.length; i++) {
      System.out.println(sorted[i]);
    }
  }
}
