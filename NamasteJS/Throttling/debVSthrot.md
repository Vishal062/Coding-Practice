# Debouncing VS Throttling

- Both are used to optimised web Apps for better performance.

- It happens by the limiting rate of function calls.

- The function call could be anything api call, login call, Verify data, Gaming function etc...

## Debouncing
- there are certain of key press events, like you are searching samsung galaxy then calls are like `s a m s u n g g a l a x y`

- If the diffrence between two key press strokes or events is gretaer than the time limit (that you provide in setTimeout) then only make api call.
like `samsung galaxy`

## Throttling
- If there are lot of events only make the function call after certain time of period.

- wait until certain time of period till then ignore all the key events.

- suppose you provide a time 5 sec and you are searching `samsu` and 5 sec over then it will make api call that related to samsu. and after certain tiume of period it will make again call and that time if you complete your key press event `Samsung Node` now it will give you result based on `samsung node`.

- Suppose someone asked you which one is better to used in our e commerce website so the answer is `Debouncing`.

## Example 

- suppose you ahve a button;(Interview may asked based on other scenerio)
- and a user click multiple times (|||||||| || || | | |);
- If the diffrence between two click events gretaer than 5 milisecond then function call.
- And in throatlling Let the user click infinite time no matter my code will give result after certain time of Interval that set by me.
- Throatliing(MachineGun) debouncing (Pistol);

- Both are best based on the situtation or requirement we used.

# throttling: 
- I am working on something which might take x milliseconds, so don't disturb me for next x milliseconds
# debouncing: 
- first you finish your action (typing, clicking) & then after x milliseconds I will fetch the required data