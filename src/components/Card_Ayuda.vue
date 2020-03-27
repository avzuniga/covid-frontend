<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="navbar" >
          <div class="time float-right">hace 30 min</div>
          <v-row class="title" dense>
            <v-icon large>mdi-pill</v-icon>
            <div>
              <v-card-title class="usertype">Anciano</v-card-title>
              <v-card-subtitle class="address">Calle 13 #25-25</v-card-subtitle>
            </div>
          </v-row>
          <v-card-actions class="d-flex justify-center">
            <v-btn class="mr-10" icon>
              <v-icon>mdi-message-reply</v-icon>
            </v-btn>
            <v-btn class="ml-10" icon>
              <v-icon>mdi-cards-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Card_Ayuda",
  data: () => ({})
};
</script>

<style lang="css" scoped>
.time {
    font-size: 10px; 
  margin-top: 25px;
  margin-right: 15px;
}
.title {
  margin-left: 15px;
}

.usertype{
   font-size: 16px; 
   font-weight: bold
}
.address{
    font-size: 10px; 
}
/* a{
 text-decoration: 'none';
 color: 'black'
}
.card{
  width: 16vw;
  max-width: 230px;
	margin: 15px;
	border-radius: 10px;
	overflow: hidden;
  box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0px rgba(0, 0, 0, 0.19);
    
}


.card:hover{

    box-shadow: 0 10px 14px 0px rgba(0, 0, 0, 0.2), 0 12px 30px 0px rgba(0, 0, 0, 0.19);

}  */
</style>
