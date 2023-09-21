import GenericService from "./GenericServices";

class ProfileService extends GenericService{
    constructor() {
        super();  
        
        

        
    }
    addProduct =(data) => {this.post("profile",data)};
    // deleteProduct =(_id) => {this.delete("products/"+_id)};
    // updateProduct =(_id,data) => {this.put("products/"+_id,data)};
    // getProduct =() => {this.get("products")};
    // getSingleProduct = (id) => this.get("products/"+id);
}


let profileService = new ProfileService();
export default profileService;