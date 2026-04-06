### UTF-8 RULES --> 2 ** (remeaning space without header) -1 --> after this point byte switch on another number like 1 byte --> 2 bytes --> 3 bytes --> 4 bytes 
1. for 1 byte char --> first value start from 0 then 7 bites --> total 8 bites --> ex:- 0xxxxxxx
2. for 2 bytes char --> first 3 and 2  digit start from 110***** 10******
-> if utf-8 could not able to store in first 7 bites then it is taking 2 bytes
-> if say 2 bytes it means it does't takes 16 bites it is taking only 11 bite remeaing 5 bites is header which is fixed.
```
let's understand with small example
for one copy symbol © --> a9(hex) --> 11000010 10101001 (binary)
11000010 --> 110 --> header
10101001 --> 10 --> this part is also header for second part
if you remove header from the both place then actual number is that
= 11000010 + 10101001
= remove header from both place --> 00010 + 101001 --> 10101001

```
3. for 3 bytes char --> 1110**** 10****** 10******
-> if utf-8 could not able to store in 11 bites then it is taking 3 bytes
-> if say 3 bytes it means it does't takes 32 bites it is taking only 24 bite remeaing 8 bites is header which is fixed.
```
let's understand with small example
 800(hex) --> 11100000 10100000 10000000 (binary)
11100000 --> 1110 --> header
10100000 --> 10 --> this part is also header for second part
10000000 --> 10 --> this part is also header for third part
if you remove header from the both place then actual number is that
= 11100001 + 10100000 + 10000000
= remove header from both place --> 0000 + 100000 + 000000 --> 100000000000

```
4. for 4 bytes char 
11110*** 10****** 10****** 10******

