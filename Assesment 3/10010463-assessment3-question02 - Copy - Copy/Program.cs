using System;

namespace _10010463_assessment3_question02
{
    class Program
    { class birds{

                     private string _FalconName;
                     private string _Species;
                     private string _Sex;
                     private string _Weight;
                     private string _Bandnumber;
                        public string FalconName
                            {
                        set 
                          {
                        _FalconName = value;
                    }
                            }
                       public string Species
                            {
                        set 
                          {
                        _Species = value;
                    }
                            }
                           public string Sex
                            {
                        set 
                          {
                        _Sex = value;
                    }
                            }
                            
                           public string Weight
                            {
                        set 
                          {
                        _Weight = value;
                    }
                            }
                                public string Bandnumber
                            {
                        set 
                          {
                        _Bandnumber = value;
                    }
                            }

                            }

                           public Falcon(string _FalconName,string  _Species,string  _Sex,string  _Weight,string  _Bandnumber) {
                            //    _FalconName = FalconName;
                               FalconName = _FalconName;
                               Species = _Species;
                              Sex =  _Sex;
                              Weight = _Weight;
                              Bandnumber  = _Bandnumber;
                               return Falcon;
                           }
                           public string bird(){
                               var bird = "Bird infor are";
                                 bird +=  $"Falcon Name is {_FalconName}";
                                 bird += $"Falcon Species is {_Species}";
                                return bird;
                           }
        static void Main(string[] args)
        { //Start the program with Clear();
        Console.Clear();
        
        
        //End the program with blank line and instructions
        Console.ResetColor();
        Console.WriteLine();
        Console.WriteLine("Press <Enter> to quit the program");
        Console.ReadKey();
          
             Console.WriteLine("Please enter name");
            string FalconName = Console.ReadLine();
          
            Console.WriteLine("Please Enter Species ");
             string Species = Console.ReadLine();

             Console.WriteLine("Please enter sex of bird ");
             string Sex = Console.ReadLine();
            
              Console.WriteLine("Please Enter Weight ");
             string weight = Console.ReadLine();
             Console.WriteLine("Please Enter bandnumber ");
                string Bandnumber = Console.ReadLine();
                 
                

        }
                
    }                   
                     
                                 
                
                
    
}
