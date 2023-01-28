#include <stdio.h>
#include <math.h>

int main() {
	printf("mnozenie.c\n\n");
	
	char aaa[25];
	printf("a = "); scanf("%s", &aaa);
	int i;
	int err = 0;
	for(i = 0; i < strlen(aaa); i++){
		if(isdigit(aaa[i]) != 1)
			err = 1;
	}
	int a = atoi(aaa);

	char bbb[25];
	printf("b = "); scanf("%s", &bbb);
	for(i = 0; i < strlen(bbb); i++){
		if(isdigit(bbb[i]) != 1)
			err = 1;
	}
	int b = atoi(bbb);

	printf("\n");
	if(err == 1) printf("Wrong input!\n");
	else if(a == 0 || b == 0) printf("%d * %d = 0\n", a, b);
	else if(a < 0 || b < 0) printf("Non negative values expected!\n");
	else{
	
	int max_a_b = a > b ? a : b;
	int min_a_b = a < b ? a : b;
	
	int minLength = log10(min_a_b) + 1;
	const int min = minLength + 1;
	
	int width_max_a_b = max_a_b > 0 ? log10(max_a_b) + 1 : 1;
	
	if((max_a_b/(int)(pow(10,width_max_a_b - 1))) * (min_a_b%10) > 9) minLength++;

	int i, z = pow(10,((int)log10(min_a_b) + 1));

	for (i = 0; i < (int)log10(min_a_b) + 1; i++) {
		int digits_a = (min_a_b%z)/(z/10);
		int carry[width_max_a_b];
		int j, d = 1, c = 0;
			for (j = width_max_a_b - 1; j > -1 ; j--){
				int digits_b = (max_a_b/d)%10;
						
				int result = (digits_a * digits_b) + c;
				
				carry[j] = result >= 10 ? (int)result/10 : 0;
				c = result/10;

				d *= 10;
			}
			int x = 0;
			while(x < minLength){
			 	printf(" ");
			 	x++;
			 }
			for (x = 0; x < width_max_a_b; x++) {
				if(carry[x] != 0) printf("%d", carry[x]);
				else printf(" ");
			}
		z = z / 10;
		printf("\n");
	}
	
	for (i = 0; i < minLength - 1; i++) printf(" ");
	printf("  %d\n", max_a_b);
	
	for (i = 0; i < minLength - 1; i++) printf(" ");
	printf("* %*d\n", width_max_a_b, min_a_b);
	
	for (i = 0; i < minLength - 1; i++) printf(" ");
	for (i = 0; i < width_max_a_b + 2; i++) printf("-");
	
	printf("\n");
	
	if(min_a_b < 10) goto label1;
	
	z = 1;
	for (i = 0; i < (int)log10(min_a_b) + 1; i++) {
		int digits_a = (min_a_b/z)%10;
		
		int carry[width_max_a_b];
		
		int d = 1, c = 0, j;
			for (j = width_max_a_b - 1; j > -1 ; j--){
				int digits_b = (max_a_b/d)%10;
						
				int result = (digits_a * digits_b) + c;
				
				carry[j] = result%10;
				c = result >= 10 ? result/10 : 0;

				d *= 10;
			}
			if(i == (int)log10(min_a_b)) printf("+ ");
			else printf("  ");

			int h = 0;
			if(c != 0) h++;
			for (h; h < minLength - 1; h++) printf(" ");
			minLength--;
			
			if(c != 0) printf("%d", c);
			
			for (h = 0; h < width_max_a_b; h++) printf("%d", carry[h]);
		z = z * 10;
		printf("\n");
	}

	for (i = 0; i < width_max_a_b + 1 + log10(min_a_b); i++) printf("-");
	
	printf("\n %*d\n", width_max_a_b + min - 1, a*b);
	
	system("pause"); 
	
	return 0;
	
	label1:
	
	printf("  %d\n", a*b);
}
	system("pause");  
	
	return 0;
}
