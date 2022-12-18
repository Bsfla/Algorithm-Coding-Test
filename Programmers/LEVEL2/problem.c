#include<stdio.h>
#include<stdlib.h>
#include <time.h>
#include <Windows.h>
//#include <unistd.h>   Window VS환경이 아닌 맥이나 리눅스 사용시  Windows.h 를 주석처리하고 사용합니다.
 
typedef struct weapon {
    char name[100];
    int power;
}Weapon;

typedef struct portion {
    char name[100];
    int power;
}Portion;

 
typedef struct player{
    char name[100];
    int hp;
    int power;
    Weapon *w;
    Portion *r;    
}Player;
 
//기본변수로 받아올 때
void showPlayer1(Player p){
      int i, val;
 
    printf("%s : %d(%d) 무기 : %s(%d) 물약 : %s(%d 회복)  \n", p.name, p.hp,p.power,p.w->name, p.w->power, p.r -> name, p.r -> power);    
    val = p.hp / 10;        
    for (i = 0; i<val; i++) {
        printf("■");
    }
  printf("\n");
 
}
//포인터변수르 받아올 때
void showPlayer2(Player *p) {
    int i, val;
 
    printf("%s : %d(%d) 무기 : %s(%d)  물약: %s(%d 회복)  \n", p->name, p->hp,p->power,p->w->name, p->w->power, p->r->name, p->r->power);    
    
    val = p->hp / 10;        
    for (i = 0; i<val; i++) {
        printf("■");
    }
    printf("\n");
}
 
//p가 total power로 targer을 공격한다! target의 hp를 변경해야하므로 인자는 포인터로 받아야 합니다!
void attack(Player *p, Player *target) {
    
    printf("%s가 %s를 공격합니다. \n", p->name, target->name);
    target->hp -= (p->power + p->w->power);
    printf("     %s의 무기는 %s!   %s hp => %d  \n", p->name, p->w->name, target->name,  target->hp);
}

void recovery(Player *p) {
    printf("%s의 Hp를 %d 만큼 회복합니다. \n", p -> name, p->r->power);
    p->hp += p->r->power;
    p->r->power = 0;
}

void select(Player *p) {
    int num;
    printf("캐릭터를 선택하세요. \n 1. 토르 2. 아이언맨 3. 짱구 4. 스파이더맨");
    scanf("%d", &num);

    switch(num) {
        case 1:
          p->name = '토르';
          break;
        
        case 2:
          p->name = '아이언맨';
          break;
        
        case 3:
          p->name = '짱구';
          break;
        case 4: 
          p->name = '스파이더맨';
          break;
        default:
          printf('다시 선택해주세요');
    }

    printf("%s을 선택했습니다", p->name);
}
 
//ver1. 1:1 battle, 최대한 간단하게
//ver2. 1:1 battle, 동적할당 적용하기, 입력은 화일에서
//ver3. n:n 구조체 배열 + 동적할당 적용하기, 입력은 화일에서
//등으로 확장하여 만들어봅니다.
int main() {
   
   Player p1;
   Player p2;
   Weapon w1={"망치", 10};
   Weapon w2={"돌멩이", 5};
   Portion r1={'빨간 포션', 50};
   Portion r2={'파란 포션', 60};
   Player *p, *target;
   
   //무기연결. 토르가 돌맹이 ㅎㅎ
   p1.w = &w2;
   p2.w = &w1;

   //포션 연결 

   p1.r = &r1;
   p2.r = &r2;

   
   select(&p1);
   select(&p2);
   showPlayer1(p1);   //showPlayer1을 사용할 때는 인자타입에 따라 p1 
   showPlayer2(&p2);  //showPlayer2를 사용할 때는 인자타입에 따라 &p2로 전달
        
   srand((unsigned)time(NULL));
   printf("battle start! \n\n");


   
   while(1){
              
       if(p1.hp <=0 || p2.hp <=0) {
          if (p1.hp <= 0 && p1.r.hp != 0) {
               
               recovery(&p1);
          } else if (p2.hp <= 0 && p2.r.hp != 0) {
            recovery(&p2);
          } else {
            break;
          }
       }
       
       //아래와 같이 한방씩 돌아가며 때리는 방식은 처음 공격한 player가 이길 확률이 높음
        // attack(&p1,&p2);
        // showPlayer(p2);
        
        // attack(&p2,&p1);
        // showPlayer(p1);
        
       //1:1 돌아가며 때리기. 한놈이 죽을 때까지 
       
       //랜덤공격 짝수면 p1->p2, 홀수면 p2->p1 
        if(rand()%2==0) {
            p=&p1; 
            target=&p2;
        }
        else {
            p=&p2;
            target=&p1;
        }
        
        attack(p, target);
        showPlayer2(target);  //showPlayer1(*target);
        //getchar(); //한 턴을 돌때마다 엔터를 눌러가며결과를 확인해보기.
        Sleep(1000);  //윈도우 sleep함수에서는 1000이 1초.  500은 0.5초입니다.
        //sleep(1);  //리눅스나  Mac의 unistd에서 제공하는 sleep()에서는 1이 1초입니다.
 
   }
   
   if(p1.hp <=0) printf("%s Win! \n", p2.name);
   else printf("%s Win! \n", p1.name);
   
}