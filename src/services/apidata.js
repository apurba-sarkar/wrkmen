// import supabase from "./supabase";
// export async function getData() {
//     let { data, error } = await supabase
//       .from("image")
//       .select("*")
//       .order("id", { ascending: false });
  
//     if (error) {
//       console.error(error);
//       throw new Error("data could not be loaded");
//     }
//     return console.log(data);

//   }