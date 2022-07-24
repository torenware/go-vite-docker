FROM cosmtrek/air

# Set up our dev area
RUN mkdir /app
WORKDIR /app
COPY . .

EXPOSE 80

CMD [ "/go/bin/air", "-w", "/app/project" ]