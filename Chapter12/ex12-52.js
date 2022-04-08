function repeat(n, f) {   // 경우에 따라 변경되는 일을 f로 추상화, 외부에서 전달 받음.
	// f : callback function
	for (var i = 0; i < n; i++) {
		f(i);
	}
} // repeat : Higher-Order Function (HOF)

repeat(5, function (i) {
    if (i % 2) console.log(i);
});
