public class Rec {
    public static void rec(int n){
        if (n==1){
/*            System.out.print("1 ");*/
        }
        else rec(n-1);
        for (int i=0;i<n;i++)
            System.out.print(n+" ");

    }
    public static void recton(int n){
        if (n==1){
            System.out.print("1 ");
        }
        else {
            recton(n - 1);
            System.out.print(n + " ");
        }
    }
    public static void recsumm (int n,int sum){
        if ((n/10)==0)
            System.out.print (n+sum);
        else {
            sum=sum+n%10;
            n=n/10;
            recsumm(n,sum);
        }

    }
    public static void main(String[] args){
        rec(10);
        System.out.println();
        recton(10);
        System.out.println();
        recsumm(123,0);
    }
}
