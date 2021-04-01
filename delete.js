
// javaScript Node is not available on geek for geeks for this problem
var sb = "aabbaaccbb";

for(var i=0; i<sb.length - 1; i++) {
    if(sb.charAt(i)==sb.charAt(i+1)) { 
        sb = sb.slice(0,i) + sb.slice(i+1);
     }
}
console.log(sb);