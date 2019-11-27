class Collision{

	constructor(x, y, width, height){
		this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }	

    update(x, y, width, height){
    	this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

	circleCollision(other) {
		if(other.haveCollision == true){

			var dx = this.x - other.x;
			var dy = this.y - other.y;
    		var distance = Math.sqrt(dx*dx + dy*dy);

    		return (distance < this.width/2 + other.width/2);
    	}
	}

	rectCollision(other) {
		if(other.haveCollision == true){
  			return !(other.x > (this.x + this.width) || 
        		(other.x + other.width) < this.x || 
        		other.y > (this.x + this.height) ||
        		(other.y + other.height) < this.y);
  		}
	}

	rectCircleColliding(other, type){
		if(other.haveCollision == true){
			if(type == 'circle'){
    			var distX = Math.abs(this.x + this.width/2 - other.x - other.width/2); 
   				var distY = Math.abs(this.y + this.height/2 - other.y - other.height/2);

    			if (distX > (other.width/2 + this.width/2)) { return false; }
    			if (distY > (other.height/2 + this.height/2)) { return false; }

    			if (distX <= (other.width/2)) { return true; }
    			if (distY <= (other.height/2)) { return true; }

    			var dx=distX-other.width/2;
    			var dy=distY-other.height/2;
    			return(dx*dx+dy*dy<=(this.width/2*this.width/2));
    		}else{
    			if(type == 'rect'){
    				var distX = Math.abs(other.x + other.width/2 - this.x - this.width/2);
   					var distY = Math.abs(other.y + other.height/2 - this.y - this.height/2);

    				if (distX > (this.width/2 + other.width/2)) { return false; }
    				if (distY > (this.height/2 + other.height/2)) { return false; }

    				if (distX <= (this.width/2)) { return true; }
    				if (distY <= (this.height/2)) { return true; }

    				var dx=distX-this.width/2;
    				var dy=distY-this.height/2;
    				return(dx*dx+dy*dy<=(other.width/2*other.width/2));
    			}
    		}
    	}
	}
}