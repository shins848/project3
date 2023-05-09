const posts = [
{
  id: 1,
  title: "PAIGE",
  gender: "Female, American Pitbull,Pitbull Mix",
  description: "The American Pitbull Terrier and Pitbull Mixes are medium-sized, muscular breeds known for their strength and agility. They are intelligent dogs that require a lot of physical exercise and mental stimulation to stay healthy and happy. Pitbulls are loyal and affectionate towards their owners but may be wary of strangers and other dogs. They can be trained to be good family pets, but early socialization and positive reinforcement training are crucial. Pitbulls are prone to certain health conditions, such as hip dysplasia, skin allergies, and heart disease, and require regular check-ups with a veterinarian. Overall, Pitbulls are energetic, loyal, and protective pets that require responsible ownership and proper training to be well-behaved companions.",
  clip_path: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" },

{
  id: 2,
  title: "YOGI",
  gender: "Male, Boxer",
  description: "Boxer dogs are a medium to large-sized breed known for their friendly and playful nature. They have a muscular build, a square-shaped head, and a short coat that requires minimal grooming. Boxers are intelligent dogs that respond well to positive reinforcement training and are eager to please their owners. They require regular exercise and socialization from a young age to stay healthy and happy. Boxers can be protective of their family members and may be prone to aggression towards other dogs if not socialized properly. They are prone to certain health conditions and require regular check-ups with a veterinarian to maintain good health. Overall, Boxers are loyal, affectionate, and playful pets that make great companions for active families.",
  clip_path: "polygon(31% 23%, 90% 30%, 50% 100%, 0% 50%)" },

{
  id: 3,
  title: "ALI",
  gender: "Male, Basenji",
  description: "Basenji dogs are a small to medium-sized breed known for their unique yodel-like vocalization and independent nature. They have a short, fine coat that requires minimal grooming and come in a range of colors. Basenjis are intelligent and curious dogs that are known for their problem-solving skills. They are independent and can be stubborn at times, requiring firm and consistent training. Basenjis are generally friendly towards their owners but may be wary of strangers and other dogs. They are active dogs that require regular exercise to stay healthy and happy. Basenjis are generally healthy but may be prone to certain health issues such as hip dysplasia and eye problems. Overall, Basenjis are loyal and affectionate pets that require responsible ownership and early socialization and training to be well-behaved companions.",
  clip_path: "polygon(0 29%, 100% 0, 100% 70%, 48% 100%)" },

{
  id: 4,
  title: "QUEEN",
  gender: "Female, Akita Crossbreed",
  description: "Akita crossbreed dogs can have a range of traits and characteristics depending on the specific breeds they are crossed with. However, in general, Akitas are a large, powerful breed that are known for their loyalty and courage. They are intelligent dogs that are often independent and can be stubborn at times, requiring firm and consistent training. Akitas can be protective of their owners and wary of strangers, making early socialization important. Crossbreeding may result in variations in size, coat type, and temperament, but Akitas are generally known for their thick, double coats and shedding. They are active dogs that require regular exercise and may be prone to certain health issues such as hip dysplasia and thyroid problems. Overall, Akita crossbreeds can make loyal and protective companions, but proper training and socialization are important to ensure they are well-behaved family pets. ",
  clip_path: "polygon(24% 0, 90% 30%, 79% 78%, 13% 76%)" },

{
  id: 5,
  title: "LOLA",
  gender: "Female, Maltese",
  description: "Maltese dogs are a small breed known for their long, silky white coat and lively personality. They are gentle and affectionate dogs that make great family pets. Maltese dogs are intelligent and easy to train, but can be stubborn at times, so positive reinforcement training is recommended. They are playful and love to be around people, but may be wary of strangers. Maltese dogs are generally healthy but may be prone to certain health issues such as dental problems and tear stains. They do not require a lot of exercise and are well-suited for apartment living. However, their long coat requires regular grooming to prevent matting. Overall, Maltese dogs make loving and loyal pets that thrive on attention and affection from their owners.",
  clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

{
  id: 6,
  title: "CHEWBACCA",
  gender: "Female, Labrador Retriever Crossbreed",
  description: "Labrador Retriever crossbreed dogs can have a range of traits and characteristics depending on the specific breeds they are crossed with. However, in general, Labradors are a medium to large-sized breed known for their friendly, outgoing nature and high energy levels. They are intelligent dogs that are easy to train and make great family pets. Labradors are known for their love of water and their retrieving abilities. Crossbreeding may result in variations in size, coat type, and temperament, but Labradors are generally known for their short, dense coats that shed and their friendly personalities. They require regular exercise and can be prone to weight gain if not given enough activity. Labradors may be prone to certain health issues such as hip dysplasia and eye problems. Overall, Labrador Retriever crossbreeds can make loyal and active companions, but early socialization and positive reinforcement training are important to ensure they are well-behaved family pets.",
  clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

  {
    id: 7,
    title: "HEIDI-BO",
    gender: "Female, Dachshund Smooth Coat",
    description: "Dachshund Smooth Coat dogs are a small breed known for their unique elongated body shape and short, smooth coat. They are intelligent and lively dogs that make great family pets. Dachshunds are affectionate towards their owners but can be wary of strangers and other dogs, making early socialization important. They are playful and love to be around people, but may be prone to stubbornness, so positive reinforcement training is recommended. Dachshunds are generally healthy but may be prone to certain health issues such as back problems due to their long body. They do not require a lot of exercise and are well-suited for apartment living. However, their coat requires regular grooming to maintain its shine and health. Overall, Dachshund Smooth Coat dogs make loving and loyal pets that thrive on attention and affection from their owners.",
    clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

    {
      id: 8,
      title: "MASSIMO",
      gender: "Male, Bull Dog, French",
      description: "French Bulldogs are a small to medium-sized breed known for their distinctive bat-like ears and affectionate personalities. They are intelligent and loyal dogs that make great family pets. French Bulldogs are playful and love to be around people, but may be prone to stubbornness, so positive reinforcement training is recommended. They are known for their low energy levels and do not require a lot of exercise, making them well-suited for apartment living. However, their short, fine coat requires regular grooming to maintain its health and shine. French Bulldogs can be prone to certain health issues such as breathing problems due to their short snouts, so responsible breeding practices are important. Overall, French Bulldogs make loving and loyal pets that thrive on attention and affection from their owners.",
      clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

  {
        id: 9,
        title: "LUCY",
        gender: "Dachshund Smooth Coat Miniature",
        description: "Dachshund Smooth Coat Miniature dogs are a smaller version of the Dachshund breed, known for their elongated body shape and short, smooth coat. They are intelligent and lively dogs that make great family pets. Dachshunds are affectionate towards their owners but can be wary of strangers and other dogs, making early socialization important. They are playful and love to be around people, but may be prone to stubbornness, so positive reinforcement training is recommended. Dachshunds are generally healthy but may be prone to certain health issues such as back problems due to their long body. They do not require a lot of exercise and are well-suited for apartment living. However, their coat requires regular grooming to maintain its shine and health. Overall, Dachshund Smooth Coat Miniatures make loving and loyal pets that thrive on attention and affection from their owners.",
        clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

        {
          id: 10,
          title: "RICKY",
          gender: "Male, Germn Shepard Dogs",
          description: "German Shepherds are a large breed known for their intelligence, loyalty, and protective nature. They are confident and courageous dogs that make great working and family pets. German Shepherds are highly trainable and excel in tasks such as obedience, agility, and search and rescue. They are affectionate towards their owners but can be wary of strangers, making early socialization important. They require regular exercise and mental stimulation to maintain their physical and emotional health. German Shepherds are generally healthy but may be prone to certain health issues such as hip dysplasia. They have a thick, dense coat that sheds heavily, requiring regular grooming. Overall, German Shepherds make loyal and devoted pets that are dedicated to their owners and thrive on work and activity.",
          clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 11,
            title: "JUNE",
            gender: "Female, Cavalier King Charles Spaniel",
            description: "Cavalier King Charles Spaniels are a small breed known for their affectionate and gentle nature. They are intelligent and adaptable dogs that make great family pets. Cavaliers love to be around people and are known for their affectionate and loyal nature, making them excellent companion dogs. They are highly trainable and excel in obedience and agility competitions. Cavaliers do not require a lot of exercise, making them well-suited for apartment living. They have a silky coat that requires regular grooming to maintain its shine and health. Cavalier King Charles Spaniels are generally healthy but may be prone to certain health issues such as heart problems and ear infections. Overall, Cavalier King Charles Spaniels make loving and loyal pets that thrive on attention and affection from their owners.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 12,
            title: "BESS",
            gender: "Female, Beagle",
            description: "Beagles are a small to medium-sized breed known for their friendly and curious nature. They are intelligent and adaptable dogs that make great family pets. Beagles are scent hounds and have a keen sense of smell, making them excellent hunting dogs. They are affectionate towards their owners but can be prone to stubbornness, so positive reinforcement training is recommended. Beagles are active dogs and require regular exercise and mental stimulation to maintain their physical and emotional health. They have a short, dense coat that requires minimal grooming. Beagles are generally healthy but may be prone to certain health issues such as hip dysplasia and ear infections. Overall, Beagles make loving and loyal pets that thrive on attention and affection from their owners.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 13,
            title: "APPLE",
            gender: "Male, Havanese",
            description: "Havanese are a small breed known for their friendly and outgoing nature. They are intelligent and adaptable dogs that make great family pets. Havanese are known for their affectionate and playful personality, making them excellent companion dogs. They are highly trainable and excel in obedience and agility competitions. Havanese do not require a lot of exercise, making them well-suited for apartment living. They have a silky coat that requires regular grooming to maintain its shine and health. Havanese are generally healthy but may be prone to certain health issues such as hip dysplasia and dental problems. Overall, Havanese make loving and loyal pets that thrive on attention and affection from their owners.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 14,
            title: "DOTTIE",
            gender: "Female, Poodle, Standard",
            description: "Standard Poodles are a highly intelligent and elegant breed known for their loyal and affectionate nature. They are adaptable dogs that make great family pets and are also used in a variety of working roles such as hunting and retrieving. Poodles are highly trainable and excel in obedience and agility competitions. They have a curly, hypoallergenic coat that requires regular grooming to maintain its health and appearance. Poodles are active dogs and require regular exercise and mental stimulation to maintain their physical and emotional well-being. They are generally healthy but may be prone to certain health issues such as hip dysplasia and eye problems. Overall, Standard Poodles make loving and loyal pets that thrive on attention and affection from their owners.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 15,
            title: "OSCAR",
            gender: "Male, German Shorthaired Pointer",
            description: "German Shorthaired Pointers are a medium to large breed known for their energetic and athletic nature. They are intelligent and adaptable dogs that make great family pets and are also used in a variety of working roles such as hunting and tracking. GSPs are highly trainable and excel in obedience and agility competitions. They have a short, dense coat that is easy to maintain and comes in a variety of colors. GSPs are active dogs and require regular exercise and mental stimulation to maintain their physical and emotional well-being. They are generally healthy but may be prone to certain health issues such as hip dysplasia and ear infections. Overall, German Shorthaired Pointers make loving and loyal pets that thrive on attention and affection from their owners.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 16,
            title: "BUDDY",
            gender: "Male, Bull Terrier",
            description: "Bull Terriers are a medium-sized breed known for their energetic and outgoing nature. They are highly intelligent and loyal dogs that make great companions for active owners. Bull Terriers are highly trainable and excel in obedience and agility competitions. They have a distinctive appearance with their egg-shaped head and short, smooth coat that comes in a variety of colors. Bull Terriers are active dogs and require regular exercise and mental stimulation to maintain their physical and emotional well-being. They are generally healthy but may be prone to certain health issues such as deafness and skin allergies. Overall, Bull Terriers make loving and loyal pets that thrive on attention and affection from their owners.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 17,
            title: "SAMMY",
            gender: "Female, Schnauzer, Miniature",
            description: "Miniature Schnauzers are a small breed known for their friendly and energetic nature. They are intelligent and adaptable dogs that make great family pets. Miniature Schnauzers are highly trainable and excel in obedience and agility competitions. They have a distinctive appearance with their signature bearded face and cropped ears. Miniature Schnauzers have a wire-haired coat that requires regular grooming to maintain its appearance and health. They are active dogs and require regular exercise and mental stimulation to maintain their physical and emotional well-being. They are generally healthy but may be prone to certain health issues such as eye problems and pancreatitis. Overall, Miniature Schnauzers make loving and loyal pets that thrive on attention and affection from their owners.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 18,
            title: "DEDE",
            gender: "Male, Boston Terrier",
            description: "Boston Terriers are a small breed known for their friendly and lively nature. They are intelligent and adaptable dogs that make great family pets. Boston Terriers are highly trainable and excel in obedience and agility competitions. They have a distinctive appearance with their short, smooth coat and brindle or black and white markings. Boston Terriers are relatively low-maintenance and do not require extensive grooming. They are active dogs and require regular exercise and mental stimulation to maintain their physical and emotional well-being. They are generally healthy but may be prone to certain health issues such as respiratory problems and eye problems. Overall, Boston Terriers make loving and loyal pets that thrive on attention and affection from their owners.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 19,
            title: "LILAH",
            gender: "Female, Norfolk Terrier",
            description: "Norfolk Terriers are a small breed known for their lively and friendly nature. They are intelligent and confident dogs that make great family pets. Norfolk Terriers are highly trainable and excel in obedience and agility competitions. They have a distinctive appearance with their shaggy, wiry coat and small, compact size. Norfolk Terriers are relatively low-maintenance and do not require extensive grooming. They are active dogs and require regular exercise and mental stimulation to maintain their physical and emotional well-being. They are generally healthy but may be prone to certain health issues such as dental problems and hip dysplasia. Overall, Norfolk Terriers make loving and loyal pets that thrive on attention and affection from their owners.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },
          

          {
            id: 20,
            title: "COOBY",
            gender: "Male, Bichon Frise",
            description: "Bichon Frise are a small breed known for their affectionate and playful nature. They are intelligent and gentle dogs that make great family pets. Bichon Frise are highly trainable and excel in obedience and agility competitions. They have a distinctive appearance with their curly, white coat and small, toy-like size. Bichon Frise are relatively low-maintenance and require regular grooming to maintain their coat. They are active dogs and require regular exercise and mental stimulation to maintain their physical and emotional well-being. They are generally healthy but may be prone to certain health issues such as eye problems and skin allergies. Overall, Bichon Frise make loving and loyal pets that thrive on attention and affection from their owners.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 21,
            title: "TIBERIUS",
            gender: "Male, Golden Retriever",
            description: "Golden Retrievers are a popular and beloved breed known for their friendly and gentle nature. They are intelligent, loyal, and highly trainable dogs that make great family pets. Golden Retrievers have a distinctive golden coat that is thick and wavy, and they require regular grooming to keep it in good condition. They are active dogs and require regular exercise and mental stimulation to maintain their physical and emotional well-being. Golden Retrievers are often used as service dogs due to their calm and obedient temperament, and they excel in activities such as hunting, tracking, and obedience competitions. They are generally healthy but may be prone to certain health issues such as hip dysplasia and obesity. Overall, Golden Retrievers make loving and loyal pets that bring joy and companionship to their owners.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 22,
            title: "MIA",
            gender: "Female, Rottweiler",
            description: "Rottweilers are a large and powerful breed known for their protective and loyal nature. They are intelligent and highly trainable dogs that make great guard dogs and family pets. Rottweilers have a distinctive black and tan coat that is short and dense, and they require minimal grooming. They are active dogs and require regular exercise and mental stimulation to maintain their physical and emotional well-being. Rottweilers are often used in law enforcement and search and rescue operations due to their strength and courage. They are generally healthy but may be prone to certain health issues such as hip dysplasia and obesity. It's important to note that Rottweilers require socialization and proper training from a young age to ensure that they are well-behaved and well-adjusted around people and other animals. Overall, Rottweilers make loyal and devoted pets to their owners who provide them with the proper care and attention they need.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 23,
            title: "ROCCO",
            gender: "Male, Chihuahua",
            description: "Chihuahuas are a small and feisty breed known for their loyalty and affection towards their owners. They are intelligent and highly alert dogs that make great lap dogs and companions. Chihuahuas have a short and smooth coat that requires minimal grooming. They are active dogs that enjoy playing and require regular exercise to maintain their physical and emotional well-being. Chihuahuas can be wary of strangers and other dogs, so it's important to socialize them properly from a young age. They are generally healthy but may be prone to certain health issues such as dental problems and patellar luxation. Due to their small size, Chihuahuas are great pets for apartment living and for owners who can't provide a lot of outdoor space. Overall, Chihuahuas make loyal and loving companions to their owners who provide them with the attention and care they need.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 24,
            title: "BLUE",
            gender: "Male, Collie, Border",
            description: "Border Collies are a highly intelligent and energetic breed known for their herding abilities. They are responsive and trainable dogs that make great working dogs and family pets. Border Collies have a medium-length, thick coat that requires regular grooming. They are active dogs that require a lot of exercise and mental stimulation to maintain their physical and emotional well-being. Border Collies are known for their intense focus and may become obsessive about certain tasks, so it's important to provide them with plenty of opportunities to work and play. They are generally healthy but may be prone to certain health issues such as hip dysplasia and epilepsy. Overall, Border Collies make loyal and devoted pets to owners who can provide them with the attention and stimulation they need.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 25,
            title: "BAILEY",
            gender: "Male, Shih Tzu",
            description: "Shih Tzus are a small and affectionate breed known for their playful and outgoing personality. They have a long and silky coat that requires regular grooming to prevent matting and tangling. Shih Tzus are friendly and social dogs that make great companions for families with children and other pets. They are intelligent and responsive dogs that are easy to train with positive reinforcement methods. Shih Tzus are generally healthy but may be prone to certain health issues such as respiratory problems and dental issues. Due to their small size, they are suitable for apartment living and do not require a lot of outdoor space. Overall, Shih Tzus make loyal and loving companions to owners who can provide them with plenty of attention and care.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 26,
            title: "DAKOTA",
            gender: "Female, Kooikerhondje",
            description: "Kooikerhondje is a Dutch breed of dog known for its energetic and affectionate nature. They have a distinctive orange-red coat with white markings on their face, ears, and tail. Kooikerhondjes are intelligent and responsive dogs that are easy to train with positive reinforcement methods. They have a high prey drive and love to chase small animals, so they need to be supervised when outdoors. Kooikerhondjes are excellent with children and other pets and make great family dogs. They are also active and require regular exercise to maintain their physical and mental well-being. With proper socialization and training, Kooikerhondjes can be well-behaved and loyal companions to their owners.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 27,
            title: "ZOEY",
            gender: "Female, American Eskimo Dog",
            description: "The American Eskimo dog is a breed of Spitz-type dog that originated in Germany. They are known for their fluffy white coat, which makes them resemble miniature Samoyeds. American Eskimo dogs are intelligent, curious, and highly trainable, making them excellent family pets. They are typically friendly and affectionate with their owners, but can be reserved with strangers. They are also highly energetic and require regular exercise to prevent destructive behaviors. American Eskimo dogs thrive in environments where they receive attention and mental stimulation, and can be vocal if they feel neglected. Overall, they are loyal and devoted companions that require a moderate amount of care and attention.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 28,
            title: "BRODY",
            gender: "Male, Cocker Spaniel",
            description: "Cocker Spaniels are a breed of hunting dog that originated in England. They are known for their long, soft ears and silky coat, which comes in a variety of colors. Cocker Spaniels are friendly, outgoing, and affectionate dogs that make great family pets. They are highly trainable and love to please their owners, making them popular in obedience competitions. They are also energetic and require daily exercise to keep them healthy and happy. Cocker Spaniels can be prone to separation anxiety, and they thrive in environments where they receive lots of attention and mental stimulation. Overall, they are loyal and devoted companions that require regular grooming and care.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

            {
              id: 29,
              title: "SANDY",
              gender: "Female, Lhasa Apso",
              description: "Lhasa Apso dogs are a small breed known for their long, thick, and luxurious coat. They have a confident and independent nature but are also loyal and affectionate with their families. Lhasa Apsos are known for their intelligence and can be stubborn at times, making them a bit challenging to train. They are wary of strangers and can be vocal, making them good watchdogs. Overall, Lhasa Apsos make great companions for those who are willing to provide the necessary grooming and training.",
              clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

              {
                id: 30,
                title: "TY",
                gender: "Male, Siberian Husky",
                description: "Siberian Husky dogs are known for their striking appearance with their thick, fluffy coat and piercing blue or multi-colored eyes. They are a medium-sized breed with high energy levels and a strong desire to run and play. Siberian Huskies are very friendly and sociable, both with their human families and other dogs. They are intelligent and independent, which can sometimes make them challenging to train, but they are also very loyal and affectionate with their families. They have a strong prey drive and are prone to wander, so they require a securely fenced yard or a leash for walks. Overall, Siberian Huskies make great pets for active families who have the time and dedication to provide them with the exercise and training they need.",
                clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" },

          {
            id: 31,
            title: "A.J.",
            gender: "Male, Puggle",
            description: "Puggles are a crossbreed between a Pug and a Beagle. They have a cute, wrinkly face and a compact, muscular body. Puggles are friendly, affectionate, and playful dogs that love attention and make great family pets. They are known for their high energy levels and love to play, making them great companions for children. Puggles are also intelligent and trainable, but they can be stubborn at times, which requires patience and consistency in training. They are social dogs and enjoy the company of other dogs and people. Puggles are low maintenance when it comes to grooming, requiring only occasional brushing to keep their coat clean and shiny. Overall, Puggles are happy, outgoing, and lovable dogs that make great companions for those looking for a fun-loving and affectionate pet.",
            clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" }];

    
      


  
            const app = new Vue({
              el: "#app",
              data() {
                return {
                  test: "",
                  posts: posts,
                  selectedClipPath: "polygon(0 100%, 0 0, 100% 0, 100% 100%)",
                  postImage: posts[0].image,
                  currentPost: null,
                  postIndex: 0,
                  selected: false,
                  ready: false,
                  lastSelectedPost: null,
                  clipPath: posts[0].clip_path
                };
              },
              methods: {
                changePost(index) {
                  if (this.postImage != this.posts[index].image && this.selected == false) {
                    this.postImage = this.posts[index].image;
                    this.clipPath = this.posts[index].clip_path;
                  }
                },
                closePost() {
                  if(this.lastSelectedPost != null){
                    this.selected = false;
                    this.ready = false;
                    this.clipPath = this.posts[this.lastSelectedPost].clip_path;
                  }
                },
                selectedPost(index) {
                  this.selected = true;
                  this.clipPath = this.selectedClipPath;
                  this.lastSelectedPost = index;
                  this.currentPost = this.posts[index];
                  setTimeout(() => {
                    this.ready = true;
                  }, 600);
                },
                nextPost() {
                  if (this.lastSelectedPost < this.posts.length - 1) {
                    this.lastSelectedPost++;
                    this.ready = false;
                    setTimeout(() => {
                      this.currentPost = this.posts[this.lastSelectedPost];
                      this.postImage = this.currentPost.image;
                      this.ready = true;
                    }, 600);
                  }
                },
                prevPost() {
                  if (
                    this.lastSelectedPost <= this.posts.length - 1 &&
                    this.lastSelectedPost != 0
                  ) {
                    this.lastSelectedPost--;
                    this.ready = false;
                    setTimeout(() => {
                      this.currentPost = this.posts[this.lastSelectedPost];
                      this.postImage = this.currentPost.image;
                      this.ready = true;
                    }, 600);
                  }
                }
              },
              created() {
                window.addEventListener("keydown", e => {
                  e.keyCode == 39 ? this.nextPost() : false;
                  e.keyCode == 37 ? this.prevPost() : false;
                  e.keyCode == 27 ? this.closePost() : false;
                });
              }
            });

        