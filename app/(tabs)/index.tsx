import SearchBar from "@/components/SearchBar";
import { Link } from "expo-router";
import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";


export default function Index() {

  const router = useRouter();

  const {data: movies, loading: moviesLoading, error: moveisError} = useFetch( () => fetchMovies({ query: '' }) )

  return (
    <View className="flex-1 bg-primary">
      <ScrollView 
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 10,
        }}
      >

        {
          moviesLoading ? (
            <ActivityIndicator
              size= 'large'
              color= '#0000ff'
              className="mt-10 self-center"
            />
          ) : moveisError ? (
            <Text>Error: {moveisError?.message}</Text>
          ) : (
            <View className="flex-1 mt-24">
              <SearchBar 
                onPress={()=> router.push("/search")} 
                placeholder= 'Search for a movie'
              />
              <>
                <Text className="text-lg text-white font-bold mt-5 mb-3" >Latest Moveis</Text>
                <FlatList
                  data={movies}
                  renderItem={({ item }) => (
                    <MovieCard {...item} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={3}
                  columnWrapperStyle= {{
                    justifyContent: 'flex-start',
                    gap: 20,
                    paddingRight: 5,
                    marginBottom: 10,
                  }}
                  className="mt-2 pb-32"
                  scrollEnabled= {false}
                />

                
              </>
        </View>
          )
        }

       
      </ScrollView>
    </View>
  );
}
