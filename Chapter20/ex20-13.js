(function (a) {
    'use strict';

    a = 2; // 전달된 인수는 strict mode에서 재할당 되지 않음

    console.log(arguments); // { 0: 1, length: 1 }
}(1));