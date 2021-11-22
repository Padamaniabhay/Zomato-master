import JwtPassport from  "passport-jwt";

//Database Model
import { UserModel } from "../database/allModels";


const JwtStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"ZomatoApp"                        //here ZometoApp is secrete key which we have define in database/user
};

export default (passport)=>{
    passport.use(
        new JwtStrategy(options,async(jwt__payload, done)=>{
            try{
                const doesUserExist = UserModel.findById(jwt__payload.user);
                if(!doesUserExist) return done(null,false);
                return done(null,doesUserExist);

            }catch(error){
                throw new Error(error);
            }
        })
    );
}