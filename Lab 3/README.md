# Lab 3
### Inline Elements
- `<h1> <h6>` : Title font size
- `<p>` : Display normal text
- `<ul>` : unordered list
- `<ol>` : orderedd list
- `<li>` : item that want to dipslya in the list

### Inline Element

### Tool to check the HTML file validation
Can using the link below to verified the html file:
- https://validator.w3.org/

### Form elements
Got a lot of form elements that can be use including:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <form action="">
        Pilih warna kegemaran anda: <input type="color" name='warnapilihan'>
        <br>
        Carian: <input type="search" name="carian">
        <br>
        Tarikh： <input type="date" name="tarikh">
        <br>
        Masa: <input type="time" name="masa">
        <br>
        Bulan dan Tahun: <input type="month" name="bulandantahun">
        <br>
        Laman Web: <input type="url" name="lamanweb">
        <br>
        Minggu: <input type="week" name="minggu">
        <br>
        Email: <input type="email" name="useremail">
        <br>
        <input type="submit" value="Hantar">
    </form>
</body>
</html>
```

### Calculation ?
We can using a simple javascript code to done the calculaltion:

```html
<!DOCTYPE html>
<body>
    <form oninput="z.value=parseInt(x.value) + parseInt(y.value)">
        <input id='x' type="range" min="0" max="10" step="1" value="0"> 0 <br> +
        <input id='y' type="number" value="10">
        <br> =
        <output name="z" for="x y"></output>
    </form>
</body>
</html>
```

### Lab Exercise
Content here