require 'httparty'
require 'pry'
require 'sinatra'
require 'json'

puts "Pick a door (type out an ip address)"

connect = gets.chomp

response = HTTParty.get(connect)

def trythis(connect, response)
	
	puts "you are now connected to#{connect}"

	puts ""
	puts response['results']
	i = 0
	while i < 1

		puts "Which celebrity might this be?(answer must be in the format of Xxxx_Xxxxxx)"	

		answer = gets.chomp

		answerURL = HTTParty.get(connect+"/"+answer)

		if answerURL['correct']

			puts "You Won!"

			puts answerURL['correct']
			i += 1

		elsif answerURL['incorrect']
			puts "Sorry try again"
			puts answerURL['incorrect']
		end		
	end
end

trythis(connect, response)
exit 
# ask for celeb guess
# puts "which celebrity might this be?"
# guess = gets.chomp
# guess_url = ip_address + guess
# check = HTTParty.get(guess_url)
# puts check

# #assess whether guess is right or wrong
# while check["incorrect"]
#  puts "which celebrity might this be?"
#  guess = gets.chomp
#  guess_url = ip_address + guess
#  check = HTTParty.get(guess_url)
#  puts check
# end

# app that:

# prompts the user for the ip address of another student
# then uses httparty to hit the route / at that ip address
# then prints to the terminal the response from that route
# then prints Which celebrity might this be? and waits for the user to take a guess
# then takes the guess from the user and hits the same ip address at the route /CELEB_GUESS
# if NICE JOB is the value of msg in the JSON returned, print that in the terminal
# if hmm, try again is the value of the msg in the JSON returned, print that in the terminal 
# and then ask the user if they want to take another guess or move on to another students ip address

