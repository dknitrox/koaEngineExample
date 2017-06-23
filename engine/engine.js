const fs=require('fs');
const path=require('path');

function TamperEngine(options){
	console.log(options);
		var path1=options.path;

	function render(filename,options){

		this.body=readTemplate(filename,options);
		this.type="html";
	}


	Object.defineProperties(this,{
		use:{
			value:function(app){
				app.context.render=render;

			}
		}
	})

	function readTemplate(filename,options){
		this.name=path.resolve(path1,filename)+'.ta';
		try{

		const file=fs.readFileSync(this.name);
		return parseTemplate(file.toString(),options);
		}
		catch(e){
		throw new Error("Error"+e);
		}
	}

	function parseTemplate(html,options){
	for(key in options){
		html=html.replace("#{"+key+"}",options[key]);	
	}
	return html;
}
}
module.exports=TamperEngine;