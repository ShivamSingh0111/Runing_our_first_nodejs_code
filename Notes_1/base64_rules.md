1. At least 3 bytes should be there to work with.
2. If 3 bytes will not be there then it will add multiple zero to fill remaing space by default.
3. base64 hmesha multiple hona chahiye 3 ka for example eihter y 3 ho ya 6.
4. y 6 bit ka group hota h..
5. agar aisa nhi h.. to baki ko y 0 se fill kr deta h..


👉 So yes, internally it uses 6-bit groups for encoding logic


### Rule kya hai actually?
```
👉 Base64 input ko 3 bytes (24 bits) ke groups me process karta hai

Agar data 3 ka multiple hai → perfect encoding ✅
Agar nahi hai → padding use hoti hai (=)
❗ Important correction

❌ “it will fill with zero” (aisa directly nahi hota visible output me)
✅ Internally encoding ke time missing bits ko temporarily 0 se pad kiya jata hai,
BUT final output me = padding add hoti hai, not zeros.

```