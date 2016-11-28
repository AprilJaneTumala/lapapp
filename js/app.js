"use strict";

class App{
	constructor(){
		this.laptop = [
			{
				"id": 1,
				"name": " Acer Aspire E5-571G-750T ",
				"description": "  ",
				"photo": "img/Acer.png",
				"specs":[
					{
						"qty": " Processor: ",
						"name": " Intel Core i7-4510U Processor 2GHz (4M Cache, up to 3.10GHz) "
					},
					{
						"qty": "Memory:  ",
						"name": " 4GB DDR3L "
					},
					{
						"qty": "Storage: ",
						"name": "1TB HDD "
					},
					{
						"qty": "Optical Drive:  ",
						"name": "DVD Super Multi Burner "
					},
					{
						"qty": "Webcam: ",
						"name": " HD Camera "
					},
					{
						"qty": "Oprating System: ",
						"name": "Windows 10  "
					},
					{
						"qty": "Display: 15.6-inch HD (1366 x 768) Display ",
						"name": "15.6-inch HD (1366 x 768) Display "
					},
					{
						"qty": " Graphics: ",
						"name": " 2GB NVIDIA GeForce 840M"
					},
					{
						"qty": " Connectivity: ",
						"name": " Acer Wireless 802.11 b/g/n, Bluetooth 4.0"
					},
					{
						"qty": " Battery: ",
						"name": "6-cell Li-On Battery"
					},
				],
				"price": "₱ 33,949.00",
				"cookingtime": "20 minutes",
				"yields": " ",
				"procedure": [
					" ",
					" ",
					" ",
					
				]
			},



			{
				"id": 2,
				"name": " Dell XPS 15 ",
				"description": "  ",
				"photo": "img/Dell.png",
				"specs":[
					{
						"qty": "Processor: ",
						"name": "6th Generation Intel Core i7-6700HQ Processor 2.6 GHz (6M Cache, up to 3.50GHz) "
					},
					{
						"qty": "Storage: ",
						"name": "256GB PCIe Solid State Drive"
					},
					{
						"qty": "Memory: ",
						"name": "8GB Dual Channel DDR4 2133MHz (4GBx2) "
					},
					{
						"qty": "Graphics: ",
						"name": "NVIDIA GeForce GTX 960M with 2GB GDDR5  "
					},
					{
						"qty": "Display: ",
						"name": "15.6-inch FHD (1920 x 1080) InfinityEdge, Non-touch Sliver "
					},
					{
						"qty": "Wireless: ",
						"name": "DW1830 3x3 802.11ac 2.4/5GHz + Bluetooth 4.1"
					},
					{
						"qty": "Battery: ",
						"name": "Dell 56 WHr 3-Cell Lithium-Ion Battery, 130 Watt AC Adaptor"
					}
				],
				"price": "₱ 79,999.00",
				"cookingtime": "20 minutes",
				"yields": " ",
				"procedure": [
					" ",
					" ",
					" ",
					
				]
			},



			{
				"id": 3,
				"name": "Laptop3",
				"description": " ",
				"photo": "img/MSI.png",
				"specs":[
					{
						"qty": "Processor: ",
						"name": "Intel Core i5-4210H Processor 2.9GHz (3M Cache, up to 3.50GHz)"
					},
					{
						"qty": "Memory: ",
						"name": "4GB DDR3L-1600 MHz"
					},
					{
						"qty": "Display: ",
						"name": "15.6-inch HD, Anti-Glare (1366*768) eDP"
					},
					{
						"qty": "Graphics: ",
						"name": "2GB NVIDIA GeForce 940M"
					},
					{
						"qty": "Storage: ",
						"name": "500GB"
					},
					{
						"qty": "Optical Drive: ",
						"name": "DVD Super Multi"
					},
					{
						"qty": "Audio: ",
						"name": "Sound by stereo speakers, Exclusive Audio Boost technology, Nahimic sound technology"
					},
					{
						"qty": "Webcam: ",
						"name": "HD type (30fps@720p)"
					},
					{
						"qty": "",
						"name": ""
					},
					{
						"qty": "",
						"name": ""
					}
				],
				"price": "₱ 38,208.00",
				"cookingtime": "20 minutes",
				"yields": " ",
				"procedure": [
					" ",
					" ",
					" ",
					
			
					
				]
			}			
		];



		this.state = [
			{
				"bind": {
					"procedures":[],
					"specs_qty":[],
					"specs_name":[]
				}
			}
		];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createLaptop(){
		let id = document.getElementById('laptop_id');
		let name = document.getElementById('laptop_name');
		let description = document.getElementById('laptop_description');
		let photo = document.getElementById('laptop_photo');
		let price = document.getElementById('laptop_price');
		let cookingtime = document.getElementById('laptope_cookingtime');
		let yields = document.getElementById('laptop_yields');
		
		let dummySpecs = [];
		for(let i=0;i<this.state[0].bind.specs_qty.length;i++){
			dummySpecs.push({
				"qty" : this.state[0].bind.specs_qty[i],
				"name" : this.state[0].bind.specs_name[i]
			});
		}
		let specs = dummySpecs;

		let dummyProcedure = [];
		for(let i=0;i<this.state[0].bind.procedures.length;i++){
			dummyProcedure.push(this.state[0].bind.procedures[i]);
		}
		let procedure = dummyProcedure;

		let laptop = {			
			"id": id.value,
			"name": name.value,
			"description": description.value,
			"photo": photo.value,
			"specs":specs,
			"price": price.value,
			"cookingtime": cookingtime.value,
			"yields": yields.value,
			"procedure": procedure
		};


		this.laptop.push(laptop);

		//Clear Fields
		this.state[0].bind.procedures = this.state[0].bind.specs_qty = this.state[0].bind.specs_name = [];
		id.value = name.value = description.value = photo.value = price.value = cookingtime.value = yields.value = ''; 
	}	

	deleteLaptop(key){
		let r = this.laptop;
		for(let i=0;i<r.length;i++){
			if(r[i].id == key){
				this.laptop.splice(i,1);
				break;
			}
		}		
		this.laptopLayout();
	}

	findLaptopByID(id){
		let r = this.laptop;
		for(let i=0;i<r.length;i++){
			if(id==r[i].id){
				return r[i];
			}
		}
	}	

	findLaptopByName(name){
		let objects = [];
		let r = this.laptop;
		for(let i=0;i<r.length;i++){
			let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
			// console.log(name," vs ",r[i].name," = ",expr);
			if(expr){
				objects.push(r[i]);
			}
		}
		return objects;
	}

	bindLaptopNewProcedures(val,id){
		let bind = this.state[0].bind.procedures;
		bind[id] = val;
		// console.log(bind);
	}	

	bindLaptopNewSpecs(val,id,obj){
		let bind = null;
		if(obj === "qty"){
			bind = this.state[0].bind.specs_qty;
		}
		else if(obj === "name"){
			bind = this.state[0].bind.specs_name;
		}
		bind[id] = val;
		// console.log(bind);
	}	
}

class Component extends App{
	constructor(){
		
		super();
	}

	laptopLayout(){
		let html = `

		


			<ul id="laptopLayout" class="dropdown-content">
 		
			  
			  <li><a href="dummypage1.html"> BUY/SELL </a></li>
			  <li class="divider"></li>

			  

			</ul>

			<ul id="laptopLayout" class="dropdown-content">
 		
			  
			  <li><a href="dummypage2.html"> OUR TEAM </a></li>
			  <li class="divider"></li>
			  
			  

			</ul>
			<nav>


			  <div class="nav-wrapper blue darken-4">
			  	<img class="left" src="img/Logo1.jpg" style="margin-top:5px; margin-left:10px;"  height=55px;" 
			  	 a href="#!" onclick="component.laptopLayout()" class="brand-logo" /> </a>

			  	
			    
			    <ul class="right hide-on-med-and-down">

			      <li><a href="index.html"> HOME </a></li>
			      <li><a href="#" onclick="component.laptopList()"><i class="material-icons left"> </i> PRODUCTS </a></li>

			      <li><a class="dropdown-button" href="#!" onclick="component.laptopList()" data-activates="laptopLayout">
			      <i class="material-icons left"> </i> B & S </a></li>

			      <!-- Dropdown Trigger -->

			      
			      <li><a href="dummypage3.html"> ABOUT </a></li>
			      <li><a class="dropdown-button" href="#!" data-activates="laptopLayout">  CONTACT </i></a></li>
			      
				  

			    </ul>
			  </div>
			</nav> 
		     
			







<div class="slider">
    <ul class="slides">

      <li>

        <img src="img/r2.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>Pic_1</h3>
          <h5 class="light grey-text text-lighten-3">(insert image here)</h5>
        </div>

      </li>
      <li>

        <img src="img/r8.jpg"> <!-- random image -->
        <div class="caption left-align">
          <h3>Pic_2</h3>
          <h5 class="light grey-text text-lighten-3">(insert image here)</h5>
        </div>

      </li>
      <li>

        <img src="img/r9.jpg"> <!-- random image -->
        <div class="caption right-align">
          <h3>Pic_3</h3>
          <h5 class="light grey-text text-lighten-3">(insert image here)</h5>
        </div>

      </li>
      <li>

        <img src="img/r7.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>Pic_4</h3>
          <h5 class="light grey-text text-lighten-3">(insert image here)</h5>

        </div>
      </li>
    </ul>
  </div>



		<br>
		<br>
		<br>
		<br>
		<br>





				<div id="laptopRecent"></div>
				<div id="laptopView"></div>
				<div id="laptopList"></div>
				<div id="laptopCreate"></div>

				



				<footer class="page-footer blue darken-4">
					<div class="container">
						<div class="row">
							<div class="col l6 s12">
								<h5 class="white-text"> HS-Laptop </h5>
								<p class="grey-text text-lighten-4"> MATT OLIVER BUTIL </p>
							</div>
							<div class="col l4 offset-l2 s12">
								<h5 class="white-text">Links</h5>
								<ul>
									<li>
										<a class="grey-text text-lighten-3" href="#" onclick="component.laptopLayout()">
											<!-- <i class="material-icons left">dashboard</i> -->
											PRODUCTS</a></li>

											<li><a class="grey-text text-lighten-3" href="#" onclick="component.laptopList()">
												<!-- <i class="material-icons left">assignment</i> -->
												CONTACT</a></li>

												<li><a class="grey-text text-lighten-3" href="#" onclick="component.laptopCreate()">
													<!-- <i class="material-icons left">dashboard</i> -->
													ABOUT</a></li>

												</ul>
											</div>
										</div>
									</div>
									<div class="footer-copyright">
										<div class="container">
											© 2016-2017 Copyright

											<img class="right" src="img/L.png" style="margin-top:6px;" />


										</div>
									</div>
								</footer>	

							</div>
		`;

		this.reRender(`
			${html}

			`,document.getElementById("app"));
		this.laptopRecent();		
	}

	laptopRecent(){
		
		let html = `
			<h5 class="center-align">Latest Today</h5>
			<div class="row">
		`;

		let r = this.laptop;
		let count = 0;
		for(let i=(r.length-1);i>=0;i--){
			if(count++ === 3)break;
			html+= `
				<div class="col s12 m4">
					<div class="card big hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].name}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.laptopView(${r[i].id})">More Infos</a>
						</div>
					</div>
				</div>
			`;
		}

		html += `</div>`;

		this.render(`		
			${html}
			`,document.getElementById("laptopRecent"));
	}

	laptopView(id){
		let r = this.findLaptopByID(id);

		let html = `
			<h5 class="center-align">${r.name}</h5>
			<div class="row">				
				<div class="col s12 m12">
					<div class="card horizontal small">
						<div class="card-image">
							<img src="${r.photo}">
						</div>
						<div class="card-stacked">
							<div class="card-content">
								<p>${r.description}</p>
							</div>
							<div class="card-action small">								
								<span onclick="component.deleteLaptop(${r.id})" class="new badge small red" data-badge-caption="">DELETE</span>
								<span onclick="component.laptopLayout()" class="new badge small" data-badge-caption="">BACK TO HOME</span>
							</div>
						</div>					
					</div>				
				</div>			
			</div>
		`;

		html += `
			<div class="row">
				<table class="striped">
					<thead>
						<tr>
							<th>Price</th>
							<th>Cooking Time</th>
							<th>Yields</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>${r.price}</td>
							<td>${r.cookingtime}</td>
							<td>${r.yields}</td>
						</tr>					
					</tbody>
				</table>
			</div>
		`;

		html += `
			<div class="row">				
				<div class="col s6 m6">
					<h6>Specs</h6>
					<ul class="collection">
		`;

		for(let i=0;i<r.specs.length;i++){
			let ri = r.specs[i];
			html += `
						<li class="collection-item avatar">
							<i class="material-icons circle">star</i>
							<span class="title">${ri.qty}</span>
							<p>${ri.name}<br>
								
							</p>
							
						</li>
			`;
		}

		html += `				
					</ul>
				</div>
				<div class="col s6 m6">
					<h6>Procedure</h6>
					<ul class="collection">
		`;

		for(let i=0;i<r.procedure.length;i++){
			let rp = r.procedure[i];
			html += `
						<li class="collection-item avatar">
							<i class="material-icons circle">done</i>
							<span class="title">Step ${i+1}</span>
							<p>${rp}<br>
								
							</p>
							
						</li>
			`;
		}	

		html += `
					</ul>
				</div>			
			</div>
		`;

		this.reRender(`		
			${html}			
			`,document.getElementById("laptopView"));
		$('#laptopView').show();
		$('#laptopRecent').hide();
		$('#laptopList').hide();
		$('#laptopCreate').hide();
	}

	laptopList(){
		let html = `
			
		  	<nav>
	    		<div class="nav-wrapper white">
					<form>
						<div class="input-field">				
							<input onkeyup="component.laptopListItems(this.value)" id="search" type="search" placeholder="Search" required>
							<label for="search"><i class="material-icons"> </i></label>
							<i class="material-icons">close</i>
						</div>
					</form>
				</div>
			</nav>
			<br/>
		`;

		html += `
			<div class="row" id="laptopListItems">
		`;
		let r = this.laptop;
		for(let i=0;i<r.length;i++){
			html+= `
				<div class="col s12 m4">
					<div class="card big hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].name}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.laptopView(${r[i].id})">More Infos</a>
						</div>
					</div>
				</div>
			`;
		}

		html += `</div>`;

		this.reRender(`
			${html}
			`,document.getElementById("laptopList"));
		$('#laptopList').show();
		$('#laptopView').hide();
		$('#laptopRecent').hide();
		$('#laptopCreate').hide();		
	}

	laptopListItems(name){
		let html = ``;
		let r = this.findLaptopByName(name);
		for(let i=0;i<r.length;i++){
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].name}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.laptopView(${r[i].id})">More Infos</a>
						</div>
					</div>
				</div>
			`;
		}		
		this.reRender(`
			${html}
			`,document.getElementById("laptopListItems"));
		$('#laptopList').show();
		$('#laptopView').hide();
		$('#laptopRecent').hide();	
		$('#laptopCreate').hide();
	}

	laptopCreate(){
		let html = `
			<div class="row">
				<form class="col s12">
				<h5 class="center-align">Create New Laptop</h5>
				<button onclick="component.createLaptop()" class="btn waves-effect waves-light">Save</button>
					<div class="row">
						<div class="input-field col s6">
							<input disabled value="${this.laptop.length+1}" id="laptop_id" type="text" class="validate">
						</div>
						<div class="input-field col s6">
							<input id="laptop_name" type="text" class="validate">
							<label for="laptop_name">NAME</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s6">
							<input id="laptop_description" type="text" class="validate">
							<label for="laptop_description">DESCRIPTION</label>
						</div>
						<div class="input-field col s6">
							<input id="laptop_photo" type="text" class="validate">
							<label for="laptop_photo">PHOTO</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s4">
							<input id="laptop_price" type="text" class="validate">
							<label for="laptop_price">PRICE</label>
						</div>
						<div class="input-field col s4">
							<input id="laptop_cookingtime" type="text" class="validate">
							<label for="laptop_cookingtime">COOKING TIME</label>
						</div>
						<div class="input-field col s4">
							<input id="laptop_yields" type="text" class="validate">
							<label for="laptop_yields">YIELDS</label>
						</div>
					</div>


					<div class="row">
						<div class="input-field col s6">
							<h6> SPECS </h6>
							<button onclick="component.laptopNewSpecs()" class="btn-floating waves-effect waves-light"><i class="material-icons">add</i></button>
							<div id="laptopNewSpecs"></div>
						</div>
						<div class="input-field col s6">
							<h6>PROCEDURES</h6>
							<button onclick="component.laptopNewProcedures()" class="btn-floating waves-effect waves-light"><i class="material-icons">add</i></button>
							<div id="laptopNewProcedures"></div>
						</div>
					</div>					
				</form>
			</div>			
		`;

		this.reRender(`
			${html}
			`,document.getElementById("laptopCreate"));
		$('#laptopCreate').show();
		$('#laptopList').hide();
		$('#laptopView').hide();
		$('#laptopRecent').hide();
		this.state[0].bind.procedures = [];		
		this.state[0].bind.specs_qty = [];		
		this.state[0].bind.specs_name = [];		
	}

	laptopNewProcedures(){
		let bind = this.state[0].bind.procedures;
		bind.push("");		
		
		let html = ``;
		for(let i=0;i<bind.length;i++){
			let decode_bind = `onkeyup="component.bindLaptopNewProcedures(this.value,${i})"`;
			html += `
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind} value="${bind[i]}" type="text" />					
					</div>
				</div>		
			`;
		}

		this.reRender(`
			${html}
			`,document.getElementById("laptopNewProcedures"));
	}

	laptopNewSpecs(obj){
		let bind_qty = this.state[0].bind.specs_qty;
		let bind_name = this.state[0].bind.specs_name;
		bind_qty.push("");		
		bind_name.push("");		
		
		let html = ``;
		for(let i=0;i<bind_qty.length;i++){
			let decode_bind_qty = `onkeyup="component.bindLaptopNewSpecs(this.value,${i},'qty')"`;
			let decode_bind_name = `onkeyup="component.bindLaptopNewSpecs(this.value,${i},'name')"`;
			html += `
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind_qty} value="${bind_qty[i]}" type="text" />					
					</div>
				</div>	
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind_name} value="${bind_name[i]}" type="text" />					
					</div>
				</div>		
			`;
		}

		this.reRender(`
			${html}
			`,document.getElementById("laptopNewSpecs"));
	}	


}

let component = new Component();
component.laptopLayout();




































































































































//////////////////////////////////////

/*
"use strict";


class App{
	constructor(){
		this.movies = [
			{
				"Title":"Winter Is Coming",
				"Year":"2011",
				"Director":"Timothy Van Patten",
				"Poster":"img/winteriscoming.jpg",
				"Actors":"Sean Bean, Mark Addy, Nikolaj Coster-Waldau, Michelle Fairley"
			},
			{
				"Title":"The North Remembers",
				"Year":"2012",
				"Director":"Alan Taylor",
				"Poster":"img/thenorthremembers.jpg",
				"Actors":"Peter Dinklage, Lena Headey, Nikolaj Coster-Waldau, Michelle Fairley"
			},
			{
				"Title":"Valar Dohaeris",
				"Year":"2013",
				"Director":"Daniel Minahan",
				"Poster":"img/valar.jpg",
				"Actors":"Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington"
			},
			{
				"Title":"Two Swords",
				"Year":"2014",
				"Director":"D.B. Weiss",
				"Poster":"img/twoswords.jpg",
				"Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
			},
			{
				"Title":"The Wars to Come",
				"Year":"2015",
				"Director":"Michael Slovis",
				"Poster":"img/thewarstocome.jpg",
				"Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
			},
			{
				"Title":"The Red Woman",
				"Year":"2016",
				"Director":"Jeremy Podeswa",
				"Poster":"img/redwoman.jpg",
				"Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
			}
		];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createMovie(){
		let t = document.getElementById('newTitle');
		let y = document.getElementById('newYear');
		let d = document.getElementById('newDirector');
		let p = document.getElementById('newPoster');
		let a = document.getElementById('newActors');

		let movie = {"Title":t.value,"Year":y.value,"Director":d.value,"Poster":p.value,"Actors":a.value};
		this.movies.push(movie);

		t.value = y.value = d.value = p.value = a.value = ''; //Clear Fields
		this.movieListInfo();
	}

	deleteMovie(key){		
		let table = document.getElementById('movieListInfo');
		table.deleteRow(key);
		this.movies.splice(key,1);

		// let m = this.movies;
		// let dummy = [];
		// for(let i=0;i<m;i++){
		// 	if(key!=i){
		// 		dummy.push(m[i]);
		// 	}
		// }
		// this.movies = dummy;
		let details = document.getElementById('movieDetails');
		details.innerHTML = "";
		this.movieListInfo();		
	}

	updateMovie(key){
		let y = document.getElementById('updateYear');
		let d = document.getElementById('updateDirector');
		let a = document.getElementById('updateActors');

		let m = this.movies[key];
		let movie = {"Title":m.Title,"Year":y.value,"Director":d.value,"Poster":m.Poster,"Actors":a.value};

		this.movies[key] = movie;
		let details = document.getElementById('movieDetails');
		details.innerHTML = "";
		this.movieListInfo();			
	}
}

class Component extends App{
	constructor(){
		super();
	}

	movieList(){
		this.render(
			`
				<div class="row">
					<div class="col col-sm-6">
						<div id="movieCreate"></div>						
					</div>
					<div class="col col-sm-6">
						<h1>Movie List</h1>
						<table id="movieList" class="table">
							<thead>
								<tr>
									<th>Title</th>
									<th>Year</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody id="movieListInfo"></tbody>
						</table>
					</div>
				</div>
				<div id="movieDetails"></div>
			`
			,document.getElementById('app'));
		this.movieListInfo();
	}

	movieListInfo(){
		let html = "";
		let m = this.movies;
		for(let i=0;i<m.length;i++){
			html += `
				<tr>
					<td>${m[i].Title}</td>
					<td>${m[i].Year}</td>
					<td><button class="btn btn-primary"  onclick="component.movieDetails(${i})">Show Details</button></td>
				</tr>
			`;
		}
		this.reRender(html,document.getElementById('movieListInfo'));
	}

	movieDetails(key){
		this.reRender(
			`
				<h1>Movie Details</h1>
				<div class="media">
				    <div class="media-left">
				        <a href="#">
				            <img class="media-object img-thumbnail" src="${this.movies[key].Poster}" width="220" />
				        </a>
				    </div>
				    <div class="media-body" id="movieDetailsInfo">
				        <h4 class="media-heading">${this.movies[key].Title}</h4>
				        Year: ${this.movies[key].Year}<br/>
						Director: ${this.movies[key].Director}<br/>
						Actors: ${this.movies[key].Actors}<br/>
						<button class="btn btn-success" onclick="component.movieUpdate(${key})">Update</button>
						<button class="btn btn-danger" onclick="component.deleteMovie(${key})">Delete</button>
					</div>	
				</div>			
			`,document.getElementById('movieDetails'));
	}

	movieCreate(){
		this.render(
			`
				<h1>New Movie</h1>
				Title: <input class="form-control" id="newTitle" type="" placeholder="Enter Title" /><br/>
				Year: <input class="form-control" id="newYear" type="" placeholder="Enter Title" /><br/>
				Director: <input class="form-control" id="newDirector" type="" placeholder="Enter Director" /><br/>
				Poster: <input class="form-control" id="newPoster" type="" placeholder="Enter Poster" /><br/>
				Actors: <input class="form-control" id="newActors" type="" placeholder="Separate using comma" /><br/>
				<button class="btn btn-primary" onclick="component.createMovie()">Create</button>
			`,document.getElementById('movieCreate'));
	}

	movieUpdate(key){
		this.reRender(
			`
					<h4 class="media-heading">${this.movies[key].Title}</h4>
			        Year: <input id="updateYear" type="text" value="${this.movies[key].Year}" /><br/>
					Director: <input id="updateDirector" type="text" value="${this.movies[key].Director}" /><br/>
					Actors: <input id="updateActors" type="text" value="${this.movies[key].Actors}" /><br/>
					<button class="btn btn-success" onclick="component.updateMovie(${key})">Save</button>
			`,document.getElementById('movieDetailsInfo'));
	}
}

let component = new Component();
component.movieList();
component.movieCreate();

*/