function func4(ch){
            var a =ch.split('')
            for(let i=0;i<a.length;i++){
                if(a[i]>='0' && a[i]<='9'){
                    a[i]="*"
                }
                document.write(a[i]);
            };
        };
        ch="ma2r45"
        func4(ch)
