from datetime import datetime, timedelta

def repeat_string( date, skip_interval):
    start_date = datetime.fromisoformat(date[:-6]) # Remove timezone info
    end_date = datetime.now()

    num_days = (end_date - start_date).days + 1

    result = [None] * num_days

    day = 0
    num_skips = 0
    while day < num_days:
        current_date = start_date + timedelta(days=day)
        current_string = f"git commit --allow-empty --date {current_date.isoformat()[:-3]}" + "-03:00)}" + " -m 'chore: something that was wasted up'"
        result[day] = current_string

        # Decide whether to skip 1 or 2 days every skip_interval days
        if day > 0 and day % skip_interval == 0:
            if (day - 1) % 2 == 0:
                num_skips = 2
            else:
                num_skips = 1
        else:
            num_skips = 0

        for i in range(num_skips):
            if day < len(result):
                result[day] = None
                day += 1

        day += 1

    return [s for s in result if s is not None]
  
# this return looks cool, but it could be simplified to this: were final_result it's a arr that we create
# for s in result:
#     if s is not None:
#         final_result.append(s)

def write_list_to_file(lst, filename):
    with open(filename, 'w') as file:
        for item in lst:
            file.write("%s\n" % item)


date = "2021-11-23T16:46:49.291-03:00"
write_list_to_file(repeat_string(date, 26), "test.txt")
